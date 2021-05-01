import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { DataConsumer } from '../../../data/data'
import { CartIcon, ToggleIcon } from '../../Icon/icon'
import defaultPortrait from './portrait.jpeg'
export default function Header() {
    const [isToggle, setIsToggle] = useState(false);
    const [showInfo,setShowInfo]= useState(false)
    const { isLogin, userCart, user, setUser } = useContext(DataConsumer)
    const logOut = () => {
        axios.get('/user/logout')
        .then()
    }
    const User = (
        isLogin
            ?
            <section className='header__user'>
                <img src={defaultPortrait} className='avatar' alt='avatar'></img>
                <div className={`arrow ${showInfo ? 'show' : ''}`}
                    onClick={() => setShowInfo(!showInfo)}
                >
                    <div className='info'>
                        <p className='account'>Name: <span>{user?.account}</span></p>
                        <p className='email'>Email: <span>{user?.email}</span></p>
                        <p className="coin">
                            {user?.coin + ' coin'}
                        </p>
                        <section className='user'>
                            <Link to='/user/login'
                                className='new-password sign'>
                                New password
                            </Link>
                            <div className='separator'>|</div>
                            <a href='/' onClick={()=>logOut()}
                                className='log-out sign'>
                                Log out
                            </a>
                        </section>
                    </div>
                </div>
            </section >
            :
            <section className='header__user'>
                <Link to='/user/login' className='sign-in sign'>Sign in</Link>
                <div className='separator'>|</div>
                <Link to='/user/register' className='sign-up sign'>Sign up</Link>
            </section>
    )

    return (
        <nav className='header'>
            <div
                className='header__toggle'
                onClick={() => setIsToggle(!isToggle)}
            >
                <ToggleIcon />
            </div>

            <Link className='header__logo' to='/'>
                <img src='https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png' alt='' />
            </Link>

            <div className={`header__navbar ${isToggle ? 'active' : ''}`}>
                <Link to='/store' className='items'>Store</Link>
                <Link to='/' className='items'>Community</Link>
                <Link to='/' className='items'>About</Link>
                <Link to='/' className='items'>Support</Link>
            </div>
            <div
                className={`header__navbar--wrapper ${isToggle ? 'active' : ''}`}
                onClick={() => setIsToggle(!isToggle)}
            ></div>
            <div className='header__navbar--right'>
                <span className='header__cart'>
                    <Link to='/user/cart' className='cart-icon'>
                        <CartIcon />
                        <div className='quantity'>{userCart.length}</div>
                    </Link>
                </span>
                {User}
            </div>
        </nav>
    )
}