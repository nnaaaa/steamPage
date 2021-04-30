import { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'

import { DataConsumer } from '../../../data/data'

export default function Login() {
    const [data, setData] = useState();
    const [err, setError] = useState();
    const { isLogin, setIsLogin, user, setUser } = useContext(DataConsumer)

    const login=(e)=> {
        e.preventDefault()
        axios.get('/user/login',
            {
                params: data
            })
            .then(res => {
                if (!res.data?.error){
                    setIsLogin(true)
                    setUser(res.data)
                }
                else {
                    setError(res.data.error)
                }
            }) 
    }
    const saveData = (target) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }
    if (isLogin) {
        return <Redirect to='/' />
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
                        <input onChange={(e) => saveData(e.target)} type="text" id='user-name' placeholder='your account' name='account' />
                        <p className="error">{err?.account ? err.account : '' }</p>
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => saveData(e.target)} type="password" id="password" placeholder='your password' name='password' />
                        <p className="error">{err?.password ? err.password : '' }</p>
                    </div>
                </div>
                <button onClick={(e) => login(e)}
                    className="btn-custom custom-1 btn-submit">
                    Sign in
                </button>
                <a href="" className="text">Forgot Password</a>
            </form>
        </section>
    )
}