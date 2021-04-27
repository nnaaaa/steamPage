import axios from 'axios'
import { useState } from 'react'
export default function Register(){
    const [userInfo,setUserInfo]=useState()
    const createUser=(e)=>{
        e.preventDefault();   
    }

    return(
        <section className='register'>
            <form className='form-input' method='POST' action='/user/register'>
                <div className='form-input__title'>
                    sign up
                </div>
                <div className='form-input__items'>
                    <div className='item'>
                        <label htmlFor='account'>Account</label>
                        <input type='text' id='account' value={userInfo?.account} name='account' placeholder='yourname123' autoFocus/>
                    </div>
                    <div className='item'>
                        <label htmlFor='email'>Email</label>
                        <input type='password' id='email' value={userInfo?.email} name='email' placeholder='example@gmail.com'/>
                    </div>
                    <div className='item'>
                        <label htmlFor=''>Password</label>
                        <input type='password' id='password' value={userInfo?.password} name='password' placeholder='from 8-16 characters password'/>
                    </div>
                    <div className='item'>
                        <label htmlFor='date'>Date</label>
                        <input type='date' id='date' name='date' value={userInfo?.date} placeholder='your birthday'/>
                    </div>
                    <div className='item'>
                        <label htmlFor='country'>Country</label>
                        <select id='country' name='country' required>
                            <option hidden selected value="">Chose your country</option>
                            <option>Viet Nam</option>
                            <option>American</option>
                        </select>
                    </div>
                </div>
                <button onClick={()=>createUser()} className='btn-custom custom-1 btn-submit'>
                    Sign Up
                </button>
            </form>
        </section>
    )
}