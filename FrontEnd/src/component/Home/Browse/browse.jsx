import { useEffect, useState, useContext } from 'react'
import { DataConsumer } from '../../../data/data'
export default function Browse() {
  const { gameInfo } = useContext(DataConsumer)
  const [activeItem, setActiveItem] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    var titles = document.querySelectorAll('.title');
    titles.forEach((title, index) => title.addEventListener('click', (e) => {
      setActiveCategory(index);
    }))
  })

  const Info = gameInfo.map((info, index) =>
    <div
      className={`item ${index === activeItem ? 'active' : ''}`}
      onMouseOver={() => setActiveItem(index)}
    >
      <img src={info.avatar} alt='gameInfo' />
      <div className='info'>
        <p className='info__name'>{info.name}</p>
        <p className='info__category'>
          {info.categories.map(category =>
            <span>{category},</span>
          )}
        </p>
      </div>
      <p className='sale-off'>{info.sale != 0 ? `-${info.sale}%` : ``}</p>
      <div className='price'>
        {info.sale != 0 ?
          <p className='price--before'>
            {(info.price * 1000)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
              )}đ
                    </p>
          : ``
        }
        <p className='price--after'>
          {(info.price * 1000 * (info.sale != 0 ? (100 - info.sale) / 100 : 1))
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
            )}đ
                </p>
      </div>
    </div>
  )

  const Detail = gameInfo.map((info, index) =>
    <div className={`item ${index === activeItem ? 'active' : ''}`}>
      <div className='info'>
        <p className='info__title'>{info.name}</p>
        <p className='info__category'>
          {info.categories.map(category =>
            <span>{category}</span>
          )}
        </p>
      </div>
      <div className='images'>
        {info.image.map(url =>
          <img src={url} alt />
        )}
      </div>
    </div>
  )
  return (
    <section className='browse'>
      <div className='browse__titles'>
        <div className={`title ${activeCategory === 0 ? 'active' : ''}`}>New and Trending</div>
        <div className={`title ${activeCategory === 1 ? 'active' : ''}`}>Top Sellers</div>
        <div className={`title ${activeCategory === 2 ? 'active' : ''}`}>Popular Upcoming</div>
        <div className={`title ${activeCategory === 3 ? 'active' : ''}`}>Specials</div>
      </div>
      <div className='browse__content'>
        <div className='browse__content--left' >
          <div className='title'>
            See more:
            <a href="" className="see-more">abc</a>
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