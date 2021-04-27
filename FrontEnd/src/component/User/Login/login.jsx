import axios from 'axios'
import { useState } from 'react'

export default function Login() {
    const [data,setData]= useState();

    function Login(){
        axios.get('')
        .then(res=>res.data)
        .then(res=>setData(res))
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
                        <input type="text" id='user-name' placeholder='your account'/>
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder='your password'/>
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