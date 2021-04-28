import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const DataConsumer = createContext()

export default function Data({children}){
    const [gameInfo, setGameInfo] = useState([]);
    const [isLogin,setIsLogin]=useState(false);
    useEffect(() => {
        axios.get('/user/login')
            .then(res => res.data)
            .then(res=>setGameInfo(res))
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