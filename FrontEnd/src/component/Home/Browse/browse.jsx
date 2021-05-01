import { useState, useContext } from 'react'
import { DataConsumer } from '../../../data/data'
export default function Browse() {
    const { gameInfo, Price } = useContext(DataConsumer)
    const [activeItem, setActiveItem] = useState(0)
    const [activeCategory, setActiveCategory] = useState(`New and Trending`)
    const [categories] = useState([
        `New and Trending`, `Top Sellers`,
        `Popular Upcoming`, `Specials`
    ])

    const Info = gameInfo.map((info, index) =>
        <div
            className={`item ${index === activeItem ? 'active' : ''}`}
            onMouseOver={() => setActiveItem(index)}
            key={index}
        >
            <img src={info.avatar} alt='gameInfo' />
            <div className='info'>
                <p className='name'>{info.name}</p>
                <p className='category'>
                    {info.categories.map((category, index, arr) =>
                        <span>
                            {index === arr.length - 1 ? `${category}` : `${category},`}
                        </span>
                    )}
                </p>
            </div>
            <p className='sale-off'>{info.sale != 0 ? `-${info.sale}%` : ''}</p>
            <div className='price'>
                {info.sale != 0 ?
                    <p className='price--before'>
                        {Price(info.price)}
                    </p>
                    : ``
                }
                <p className='price--after'>
                    {Price(String(info.price * (100 - info.sale) / 100))}
                </p>
            </div>
        </div>
    )
    const Detail = gameInfo.map((info, index) =>
        <div className={`item ${index === activeItem ? 'active' : ''}`} key={index}>
            <div className='info' style={{width:'auto'}}>
                <p className='name'>{info.name}</p>
                <p className='category' >
                    {info.categories.map((category, index, arr) =>
                        index === arr.length - 1 ? `${category}` : `${category},`
                    )}
                </p>
            </div>
            <div className='images'>
                {info.image.map(url =>
                    <img src={url} alt='game' />
                )}
            </div>
        </div>
    )
    const CategoriesList = categories.map((category, index) =>
        <div
            className={`title ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(categories[index])}
            key={index}
        >
            {category}
        </div>
    )
    return (
        <section className='browse'>
            <div className='browse__titles'>
                {CategoriesList}
            </div>
            <div className='browse__content'>
                <div className='browse__content--left' >
                    <div className='title'>
                        See more:&nbsp;
                        <a href='/' className="see-more">{activeCategory}</a>
                    </div>
                    <div className='items'>
                        {Info}
                    </div>
                </div>
                <div className='browse__content--right'>
                    <div className='preview'>
                        {Detail}
                    </div>
                </div>
            </div>
        </section>
    )
}