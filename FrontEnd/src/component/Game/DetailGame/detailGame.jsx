import { useContext } from 'react'
import { DataConsumer } from '../../../data/data'
import { CartIcon } from '../../Icon/icon'
export default function DetailGame() {
    const { activeGameInfo, Price, addCart } = useContext(DataConsumer)
    return (
        <section className="detail-game">
            <div className='info'>
                <img src={activeGameInfo.avatar} alt="" />
                <p className='name'>{activeGameInfo.name}</p>
                <p className='category'>
                    {activeGameInfo.categories.map((category, index, arr) =>
                        <span>
                            {index === arr.length - 1 ? `${category}` : `${category},`}
                        </span>
                    )}
                </p>
                <p className='sale-off'>
                    {activeGameInfo.sale !== 0 ? `-${activeGameInfo.sale}%` : ``}
                </p>
                <div className='contact'>
                    <span className='cartBtn'
                        onClick={(e) => addCart(activeGameInfo, e)}
                    >
                        <CartIcon />
                        <div className='addCart'>+</div>
                    </span>
                </div>
                <div className='price'>
                    {activeGameInfo.sale !== 0 ?
                        <p className='price--before'>
                            {Price(activeGameInfo.price)}
                        </p>
                        : ``
                    }
                    <p className='price--after'>
                        {Price(String(activeGameInfo.price * (100 - activeGameInfo.sale) / 100))}
                    </p>
                </div>
            </div>
            <div className='images'>
                {activeGameInfo.image.map(url =>
                    <img src={url} alt='game' />
                )}
            </div>
        </section>
    )
}