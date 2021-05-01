import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

import Price from '../logic/price'

export const DataConsumer = createContext()

export default function Data({children}){
    const [gameInfo, setGameInfo] = useState([]);
    const [activeGameInfo, setActiveGameInfo] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState();
    const [userCart, setUserCart] = useState([]);
    useEffect(() => {
        axios.get('/game')
        .then(res=>res.data)
        .then(data=>setGameInfo(data))
    },[]) 
    useEffect(() => {   
        axios.get('/user/login')
            .then(res => {
                const cartParsed = res.data?.cart?.map(item => JSON.parse(item))
                if (!res.data?.error){
                    setIsLogin(true)
                    setUser(res.data)
                    setUserCart([
                        ...userCart,
                        ...cartParsed
                    ])
                }            
            })
    }, [])
    const updateUserCart = (newUser) => {
        if (!user) {
            return
        }
        axios.get('/user/updateCart', { params: newUser })
        .then(res=>1)
    }
    const addCart = (newCart, e) => {
        e.preventDefault()
        setUserCart([...userCart, newCart])
        const newUser = {
            ...user,
            cart: [...userCart, newCart]
        }
        updateUserCart(newUser)
    }
    return (
        <DataConsumer.Provider
            value={{
                gameInfo,
                activeGameInfo,setActiveGameInfo,
                isLogin, setIsLogin,
                user, setUser,
                userCart,setUserCart,
                updateUserCart,
                Price,addCart,
            }}
        >
            {children}
        </DataConsumer.Provider>
    )
}