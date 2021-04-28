import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const DataConsumer = createContext()

export default function Data({children}){
    const [gameInfo, setGameInfo] = useState([]);
    const [isLogin,setIsLogin]=useState(false);
    useEffect(()=>{
        axios.get('/game')
        .then(res=>res.data)
        .then(data=>setGameInfo(data))
    })
    useEffect(() => {
        axios.get('/user/login')
            .then(res => res.data)
            .then(data=>{
                setIsLogin(true)
            })
    },[])

    return (
        <DataConsumer.Provider
            value={{
                gameInfo,
                isLogin,setIsLogin
            }}
        >
            {children}
        </DataConsumer.Provider>
    )
}