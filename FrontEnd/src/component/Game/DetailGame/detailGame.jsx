import { useContext } from 'react'
import { DataConsumer } from '../../../data/data'
export default function DetailGame() {
    const { activeGameInfo } = useContext(DataConsumer)
    return (
        <div className='item'>
            <img src={activeGameInfo.avatar} alt='gameInfo' />
            <div className='info'>
                <p className='info__name'>{activeGameInfo.name}</p>
                <p className='info__category'>
                    {activeGameInfo.categories.map((category, index, arr) =>
                        <span>
                            {category === "" || index === arr.length - 1 ? `` : `${category},`}
                        </span>
                    )}
                </p>
            </div>
            <p className='sale-off'>{activeGameInfo.sale !== 0 ? `-${activeGameInfo.sale}%` : ``}</p>
            <div className='price'>
                {activeGameInfo.sale !== 0 ?
                    <p className='price--before'>
                        {(activeGameInfo.price * 1000)
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
                            )}đ
                    </p>
                    : ``
                }
                <p className='price--after'>
                    {(activeGameInfo.price * 1000 *
                        (activeGameInfo.sale !== 0 ? (100 - activeGameInfo.sale) / 100 : 1))
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
                    )}đ
                </p>
            </div>
        </div>
    )
}