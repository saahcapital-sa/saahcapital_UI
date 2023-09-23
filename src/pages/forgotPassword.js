import React from 'react'
import { Form, Button, Image} from 'react-bootstrap'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'

const ForgotPassword = () => {
    return (
        <div className='forgotWrap'>
            <Link href="/" className="logoImg">
                <Image src="images/saah-financial-logo.svg" className='sbd-logo' />
            </Link>
            <div className='signFormCard'>
                <h2>Forgot Password</h2>
                <p>Enter your email and we’ll send you a reset link</p>
                <Form className='customform'>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Button type='submit' className="general-btn">Send reset link</Button>
                </Form>
                <Link href="/login" className="backBtn"><BiArrowBack />Back to Log in</Link>
            </div>
        </div>
    )
}

export default ForgotPassword