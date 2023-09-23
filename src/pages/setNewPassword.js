import React, { useState } from 'react'
import { Form, Button, Image} from 'react-bootstrap'
import { BiArrowBack } from 'react-icons/bi'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import Link from 'next/link'

const SetNewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='forgotWrap'>
            <Link href="/" className="logoImg">
                <Image src="images/saah-financial-logo.svg" className='sbd-logo' />
            </Link>
            <div className='signFormCard'>
                <h2>Set new password</h2>
                <p>Set new password to continue</p>
                <Form className='customform'>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <div className='inputWrap'>
                            <Form.Control  type={showPassword ? 'text' : 'password'} placeholder="Enter password" required />
                            {showPassword ? <FaRegEye onClick={() => setShowPassword(!showPassword)} />: <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)}/>}
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <div className='inputWrap'>
                            <Form.Control  type={showConfirmPassword ? 'text' : 'password'} placeholder="Repeat password" required />
                            {showConfirmPassword ? <FaRegEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} />: <FaRegEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>}
                        </div>
                    </Form.Group>
                    <ul className="passwordCondition">
                        <li>At least one numeric character</li>
                        <li>At least one special character</li>
                        <li>Can contain special characters but not necessary</li>
                        <li>Must be 7 digits or above</li>
                    </ul>
                    <Button type='submit' className="general-btn">Reset password</Button>
                </Form>
                <Link href="/login" className="backBtn"><BiArrowBack />Back to Log in</Link>
            </div>
        </div>
    )
}

export default SetNewPassword