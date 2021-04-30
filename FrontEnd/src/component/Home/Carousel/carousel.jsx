import { useEffect, useState } from 'react'
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'

export default function Carousel() {
    const [image, setImage] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        let img = [
            'https://cdn.cloudflare.steamstatic.com/steam/apps/1366540/header.jpg?t=1618986784',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_31c19dc3adf3de8c982f58181c207fa619a15d97.600x338.jpg',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/1113560/ss_b7867dae1f1fa62a2cc82165c8c79eb6821782d6.600x338.jpg',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/680420/ss_c0ea37459f5e3c754f21d42d6bf375dfbdd075de.600x338.jpg',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/552520/ss_c6f08b3d2e156f705205f882504d3cd96f78cca1.600x338.jpg'
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
    
    const Carousel=image.map((url, index) =>
        <div className={`carousel__items ${index === activeIndex ? `active` : ``}`} >
            <img src={url} alt='' />
        </div>
    )
    const Indicators=image.map((url, index) =>
        <div
            className={`indicator ${index === activeIndex ? `active` : ``}`}
            onClick={() => setActiveIndex(index)}
        >
        </div>
    )
    return (
        <section className='carousel'>
            <div className='carousel__header'>
                featured & recommended
            </div>
            <div className='carousel__inner'>
                {Carousel}
                <div className='carousel__indicators'
                    style={{ width: `${image.length * 30 + 30}px` }}
                >
                    {Indicators}
                </div>
                <div
                    className='carousel__control--left carousel__control'
                    onClick={() => setActiveIndex(activeIndex === 0 ? image.length - 1 : activeIndex - 1)}
                >
                    <img src={leftArrow} alt="arrow"/>
                </div>
                <div
                    className='carousel__control--right carousel__control'
                    onClick={() => setActiveIndex(activeIndex + 1 === image.length ? 0 : activeIndex + 1)}
                >
                    <img src={rightArrow} alt="arrow"/>
                </div>
            </div>
        </section>
    )
}