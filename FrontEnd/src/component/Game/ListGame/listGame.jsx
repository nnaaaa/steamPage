import { useContext } from 'react'
import { DataConsumer } from '../../../data/data'
import { CartIcon } from '../../Icon/icon'
import { Link } from "react-router-dom";

export default function ListGame() {
    const {
        gameInfo, setActiveGameInfo,
        updateUserCart, user, userCart, setUserCart } = useContext(DataConsumer)
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
        <section className='list-game'>
            {gameInfo.map(item =>
                <Link
                    className='card' to='/game/detailCart'
                    onClick={() => setActiveGameInfo(item)}
                >
                    <img src={item.avatar} alt="" />
                    <div className='images'>
                        {item.image.map(url =>
                            <img src={url} alt='game' />
                        )}
                    </div>
                    <p className='info__name name'>{item.name}</p>
                    <p className='info__category category'>
                        {item.categories.map((category, index, arr) =>
                            <span>{category === "" || index === arr.length - 1 ? `` : `${category},`}</span>
                        )}
                    </p>
                    <p className='sale-off'>
                        {item.sale !== 0 ? `-${item.sale}%` : ``}
                    </p>
                    <div className='contact'>
                        <span className='cartBtn'
                            onClick={(e) => addCart(item,e)}
                        >
                            <CartIcon />
                            <div className='addCart'>+</div>
                        </span>
                    </div>
                    <div className='price'>
                        {item.sale !== 0 ?
                            <p className='price--before'>
                                {(item.price * 1000)
                                    .toFixed(2)
                                    .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
                                    )}đ
                                </p>
                            : ``
                        }
                        <p className='price--after'>
                            {(item.price * 1000 * (item.sale !== 0 ? (100 - item.sale) / 100 : 1))
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
                                )}đ
                            </p>
                    </div>
                </Link>
            )}
        </section>
    )
}