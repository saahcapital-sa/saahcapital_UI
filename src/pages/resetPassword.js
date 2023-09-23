import React from 'react'
import { Form, Button, Image} from 'react-bootstrap'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'

const ResetPassword = () => {
    return (
        <div className='forgotWrap checkMail resetPassword'>
            <Link href="/" className="logoImg">
                <Image src="images/saah-financial-logo.svg" className='sbd-logo' />
            </Link>
            <div className='signFormCard'>
                <Image src="images/check-icon.svg" className='cardIcon' />
                <h2>Password Reset</h2>
                <p>Your password has been successfully reset. Click below to log in magically.</p>
                <Link href="#" className="general-btn">Continue</Link>
                <Link href="/login" className="backBtn"><BiArrowBack />Back to Log in</Link>
            </div>
        </div>
    )
}

export default ResetPassword