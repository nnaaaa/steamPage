import axios from 'axios'
import { useState,useEffect, createContext} from 'react'

export default function Login() {
    const [data, setData] = useState();
    const [login,setLogin]=useState();
    function Login(){   
        axios.get('/user/login',
        {
            params:data
        })
        .then(res=>res.data)
        .then(res=>setData(res))
    }
    
    const saveData=(target)=>{
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    return (
        <section className='login'>
            <form action='' className='form-input'>
                <div className="form-input__title">
                    sign in
                </div>
                <div className="form-input__items">
                    <div className="item">
                        <label htmlFor="user-name">Account name</label>
                        <input onChange={(e)=>saveData(e.target)} type="text" id='user-name' placeholder='your account' name='account'/>
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e)=>saveData(e.target)} type="password" id="password" placeholder='your password'name='password'/>
                    </div>
                </div>
                <button onClick={()=>Login()} className="btn-custom custom-1 btn-submit">
                    Sign in
                </button>
                <a href="" className="text">Forgot Password</a>
            </form>
        </section>
    )
}