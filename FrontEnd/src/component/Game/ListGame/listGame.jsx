import { useContext } from 'react'
import { DataConsumer } from '../../../data/data'
import { CartIcon } from '../../Icon/icon'
import { Link } from "react-router-dom";

export default function ListGame() {
    const {
        Price,addCart,
        gameInfo, setActiveGameInfo,} = useContext(DataConsumer)
    
    return (
        <section className='list-game'>
            {gameInfo.map(item =>
                <Link
                    className='card info' to='/game/detailCart'
                    onClick={() => setActiveGameInfo(item)}
                >
                    <img src={item.avatar} alt="" />
                    <div className='images'>
                        {item.image.map(url =>
                            <img src={url} alt='game' />
                        )}
                    </div>
                    <p className='name'>{item.name}</p>
                    <p className='category'>
                        {item.categories.map((category, index, arr) =>
                            <span>
                                {index === arr.length - 1 ? `${category}` : `${category},`}
                            </span>
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
                        <span className='evaluate'>
                            <span>*</span>
                            <span>*</span>
                            <span>*</span>
                            <span>*</span>
                            <span>*</span>                        
                        </span>
                    </div>
                    <div className='price'>
                        {item.sale !== 0 ?
                            <p className='price--before'>
                                {Price(item.price)}
                            </p>
                            : ``
                        }
                        <p className='price--after'>
                            {Price(String(item.price * (100 - item.sale) / 100))}
                        </p>
                    </div>
                </Link>
            )}
        </section>
    )
}