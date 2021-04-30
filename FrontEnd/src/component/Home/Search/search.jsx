import loupe from './loupe.svg'

export default function Search() {
  return (
    <section className='search'>
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

      <form action='' className='search__form'>
        <input className='input' type='text' placeholder='search the store' />
        <img className='icon' src={loupe} alt="loupe" />
      </form>

    </section>
  )
}