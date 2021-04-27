import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const DataConsumer = createContext()

export default function Data({children}){
    const [gameInfo, setGameInfo] = useState([]);

    useEffect(() => {
        axios.get('/game')
            .then(res => {
                console.log(res)
                return res.data
            })
            .then(res=>setGameInfo(res))
    }, [])

    return (
        <DataConsumer.Provider
            value={{
                gameInfo
            }}
        >
            {children}
        </DataConsumer.Provider>
    )
}