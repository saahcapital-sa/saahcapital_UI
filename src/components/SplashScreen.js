import React from 'react'
import { Image } from 'react-bootstrap'

const SplashScreen = () => {
    return (
        <div className='splash-wrap'>
            <Image src="images/sbd-logo.png" className='logo-img' />
            <Image src="images/palm-img.png" className='palm-img' />
        </div>
    )
}

export default SplashScreen