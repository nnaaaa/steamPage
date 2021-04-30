import { useState, useContext } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'

import { DataConsumer } from '../../../data/data'

export default function Register(){
    const [userInfo, setUserInfo] = useState()
    const [err, setError] = useState();
    const {isLogin,setUser,setIsLogin}=useContext(DataConsumer)
    const createUser=(e)=>{
        e.preventDefault();
        axios.get('/user/register',{params:userInfo})
            .then(res => {
                if (!res.data?.error) {
                    setIsLogin(true)
                    setUser(res.data)
                }
                else {
                    setError(res.data.error)
                }
            })
    }
    const update = (target) => {
        setUserInfo({
            ...userInfo,
            [target.name]:target.value
        })
    }
    if (isLogin) {
        return <Redirect to='/' />
    }
    return(
        <section className='register'>
            <form className='form-input' action=''>
                <div className='form-input__title'>
                    sign up
                </div>
                <div className='form-input__items'>
                    <div className='item'>
                        <label htmlFor='account'>Account</label>
                        <input type='text' id='account' value={userInfo?.account} name='account' placeholder='myaccount123'
                            autoFocus onChange={(e) => update(e.target)} />
                        <p className="error">{err?.account ? err.account : '' }</p>
                    </div>
                    <div className='item'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' value={userInfo?.email} name='email' placeholder='example@gmail.com'
                            onChange={(e) => update(e.target)} />
                        <p className="error">{err?.email ? err.email : '' }</p>
                    </div>
                    <div className='item'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password'
                        value={userInfo?.password} placeholder='from 8-16 characters '
                            name='password' onChange={(e) => update(e.target)} />
                        <p className="error">{err?.password ? err.password : '' }</p>
                    </div>
                    <div className='item'>
                        <label htmlFor='confirmPassword'>Confirm password</label>
                        <input type='password' id='confirmPassword'
                            placeholder='from 8-16 characters' name='confirmPassword' onChange={(e) => update(e.target)} />
                        <p className="error">
                            {err?.confirmPassword ? err.confirmPassword : ''}
                        </p>
                    </div>
                    <div className='item'>
                        <label htmlFor='date'>Date</label>
                        <input type='date' id='date' name='date'
                        value={userInfo?.date} placeholder='your birthday'
                        onChange={(e) => update(e.target)} />
                    </div>
                    <div className='item'>
                        <label htmlFor='country'>Country</label>
                        <select defaultValue='Chose your country' id='country' name='country' onChange={(e) => update(e.target)} required>
                            <option hidden value="">Chose your country</option>
                            <option>Viet Nam</option>
                            <option>American</option>
                        </select>
                    </div>
                </div>
                <button
                    onClick={(e) => createUser(e)}
                    className='btn-custom custom-1 btn-submit'
                >
                    Sign Up
                </button>
            </form>
        </section>
    )
}