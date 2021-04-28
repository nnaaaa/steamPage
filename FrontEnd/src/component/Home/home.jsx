import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

import Search from './Search/search'
import Gutter from './Gutter/gutter'
import Carousel from './Carousel/carousel'
import SpecialGame from './SpecialGame/specialgame'
import Browse from './Browse/browse';


export default function Store() {
  useEffect(() => {
    ScrollReveal().reveal('.store-content')
    ScrollReveal().reveal('.store-browse')
  })
  return (
    <section className="content">
      <div className='content__store'>
          <div className="content__store--left">
            <Gutter />
          </div>
          <div className="content__store--right">
            <Search />
            <Carousel />
            <SpecialGame />
          </div>
      </div> 

      <div className="content__browse">
        <Browse />
      </div>
    </section>
  )
}