import { useEffect, useState} from 'react'

import DataConsumer from '../../../data/data'
import SetGameOne from './set_1/index'
import SetGameTwo from './set_2/index'
import SetGameThree from './set_3/index'
import SetGameFour from './set_4/index'

import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'

export default function SpecialGame() {
    const [image, setImage] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        let img = [
            [
                'https://cdn.cloudflare.steamstatic.com/steam/apps/1366540/header.jpg?t=1618986784',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/1238840/header.jpg?t=1615894782',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/1121560/header.jpg?t=1617195385',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/815370/header.jpg?t=1616701574'
            ],
            [
                'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/ss_79af6b4e7ea15b745c0c315e4ae8f7450bb64f58.600x338.jpg',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/ss_2034e0261ba7313a2eaa78edafed1182f2eb48cc.600x338.jpg',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_e783457b53702b76249835ac1b4c051211b92d69.600x338.jpg',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/1282730/ss_d6cf090e7c644756cc66443c0740f5497e6afbba.600x338.jpg',
            ],
            [
                'https://cdn.cloudflare.steamstatic.com/steam/spotlights/b8707ca83e76d6a0fd797ffd/spotlight_image_english.jpg?t=1619023017',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/278080/header.jpg?t=1569989801',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/513710/header.jpg?t=1617211816',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/513710/header.jpg?t=1617211816'
            ],
            [
                'https://cdn.cloudflare.steamstatic.com/steam/spotlights/e868f365438daca1d604c8ca/spotlight_image_english.jpg?t=1615852957',
                'https://cdn.cloudflare.steamstatic.com/steam/spotlights/b7d5204751898f6aadb1390d/spotlight_image_english.jpg?t=1615860453',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg?t=1615927620',
                'https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg?t=1602601042'
            ],
        ]
        setImage(img)

    }, [])

    useEffect(() => {

        let AutoSlideShow = setTimeout(() => {
            let count = (activeIndex === image.length - 1) ? 0 : activeIndex + 1
            setActiveIndex(count)
        }, 2000)
        return () => {
            clearTimeout(AutoSlideShow)
        }
    }, [activeIndex])
    
    return (
        <section className='special-game'>
            <div className='special-game__header'>
                special game
            </div>
            <div className='special-game__inner'>
                <SetGameOne url={image[0]} currentIndex={activeIndex} stateIndex={0}/>
                <SetGameTwo url={image[1]} currentIndex={activeIndex} stateIndex={1}/>
                <SetGameThree url={image[2]} currentIndex={activeIndex} stateIndex={2}/>
                <SetGameFour url={image[3]} currentIndex={activeIndex} stateIndex={3}/>

                <div className='special-game__indicators' style={{ width: `${image.length * 30 + 30}px` }}>
                    {image.map((url, index) =>
                        <div
                            className={`indicator ${index === activeIndex ? `active` : ``}`}
                            onClick={() => setActiveIndex(index)}
                        >
                        </div>
                    )}
                </div>
                <div
                    className="special-game__control--left special-game__control"
                    onClick={() => setActiveIndex(activeIndex === 0 ? image.length - 1 : activeIndex - 1)}
                >
                    <img src={leftArrow} alt="arrow"/>
                </div>
                <div
                    className="special-game__control--right special-game__control"
                    onClick={() => setActiveIndex(activeIndex + 1 === image.length ? 0 : activeIndex + 1)}
                >
                    <img src={rightArrow} alt="arrow"/>
                </div>
            </div>
        </section>
    )
}