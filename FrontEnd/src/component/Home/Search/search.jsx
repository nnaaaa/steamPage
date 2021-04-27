import loupe from './loupe.svg'

export default function Search() {
  return (
    <search className='search'>
      <div className='search__category'>
        <a className='search__title' href=''>
          <div>Your Store</div>
        </a>
        <a className='search__title' href=''>
          <div>Browse</div>
        </a>
        <a className='search__title' href=''>
          <div>Points Shop</div>
        </a>
        <a className='search__title' href=''>
          <div>News</div>
        </a>
        <a className='search__title' href=''>
          <div>Steam Labs</div>
        </a>
      </div>

      <div className='search__tool'>
        <form action='' className='search__form'>
          <input className='search__input' type='text' placeholder='search the store' />
          <span className='search__icon'><img src={loupe} alt="loupe"/></span>
        </form>
      </div>
    </search>
  )
}