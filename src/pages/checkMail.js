import React from 'react'
import { Form, Button, Image} from 'react-bootstrap'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'

const CheckMail = () => {
    return (
        <div className='forgotWrap checkMail'>
            <Link href="/" className="logoImg">
                <Image src="images/saah-financial-logo.svg" className='sbd-logo' />
            </Link>
            <div className='signFormCard'>
                <Image src="images/mail-icon.svg" className='cardIcon' />
                <h2>Check you email</h2>
                <p>We sent a password reset link to <b>john@example.com</b></p>
                <Link href="#" className="general-btn">Open email app</Link>
                <span>Didn’t receive the email? <Button type='button' className='resendBtn'>Click to resend</Button></span>
                <Link href="/login" className="backBtn"><BiArrowBack />Back to Log in</Link>
            </div>
        </div>
    )
}

export default CheckMail