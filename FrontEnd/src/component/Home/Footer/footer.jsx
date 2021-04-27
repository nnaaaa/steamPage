import fb from './facebook.svg'
import insta from './instagram.svg'
import ytb from './youtube.svg'
import viber from './viber.svg'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__contact'>
                <a href=''>
                    <img src={fb} alt='facebook' />
                </a>
                <a href=''>
                    <img src={insta} alt='instagram' />
                </a>
                <a href=''>
                    <img src={ytb} alt='youtube' />
                </a>
                <a href=''>
                    <img src={viber} alt='viber' />
                </a>
            </div>
            <div className='footer__content'>
                <img src='https://store.cloudflare.steamstatic.com/public/images/footerLogo_valve_new.png' alt='' />
                <div>
                    © 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                    VAT included in all prices where applicable.
                </div>
                <img src='https://store.cloudflare.steamstatic.com/public/images/v6/logo_steam_footer.png' alt='' />
            </div>          
        </footer>
    )
}