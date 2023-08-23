import React, { useState } from 'react'
import { Button, Image, Form, Row, Col } from 'react-bootstrap';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'

const clientData = [{
    name: "Abdulaziz",
    email: "abdulaziz@example.com",
    clientId: "1127363897",
    phoneNumber: "+966598370408",
    password: "admin12345",
}]

const UpdatePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="passwordCard">
            <div className="acccountDetailHeading">
                <h3>Password</h3>
                <Button type='button' className="changePassword" onClick={() => setEditPassword(!editPassword)}>Change Password</Button>
            </div>
            {editPassword ?
                <Form className='customform'>
                    <Row>
                        <Form.Group as={Col} lg={4} className="mb-4">
                            <Form.Label>Old Password</Form.Label>
                            <div className='inputWrap'>
                                <Form.Control  type={showOldPassword ? 'text' : 'password'} placeholder="********" required />
                                {showOldPassword ? <FaRegEye onClick={() => setShowOldPassword(!showOldPassword)} />: <FaRegEyeSlash onClick={() => setShowOldPassword(!showOldPassword)}/>}
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} lg={4} className="mb-4">
                            <Form.Label>New Password</Form.Label>
                            <div className='inputWrap'>
                                <Form.Control  type={showNewPassword ? 'text' : 'password'} placeholder="********" required />
                                {showNewPassword ? <FaRegEye onClick={() => setShowNewPassword(!showNewPassword)} />: <FaRegEyeSlash onClick={() => setShowNewPassword(!showNewPassword)}/>}
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} lg={4} className="mb-4">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className='inputWrap'>
                                <Form.Control  type={showConfirmPassword ? 'text' : 'password'} placeholder="********" required />
                                {showConfirmPassword ? <FaRegEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} />: <FaRegEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>}
                            </div>
                        </Form.Group>
                    </Row>
                    <Button type='submit' className='general-btn'>Update Password</Button>
                </Form> :
                <>
                    {clientData.map(item =>
                        <div className="showpassword">
                            <span>Password:</span>
                            <p>{showPassword ? item.password : "**********"} {showPassword ? <FaRegEye onClick={() => setShowPassword(!showPassword)} /> : <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} />}</p>
                        </div>
                    )}
                </>
            }
        </div>
    )
}
export default UpdatePassword