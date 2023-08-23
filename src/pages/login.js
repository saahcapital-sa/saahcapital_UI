import React, {useState} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import SplashScreen from "../components/SplashScreen"
import Link from 'next/link'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Row  className='m-0'>
            <Col lg="6" className='p-0'>
                <SplashScreen />
            </Col>
            <Col lg="6" className='p-0'>
                <div className='signWrap'>
                    <div className='signFormCard'>
                        <h2>Login</h2>
                        <p>Welcome Back! Please enter your details.</p>
                        <Form className='customform'>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <div className='inputWrap'>
                                    <Form.Control  type={showPassword ? 'text' : 'password'} placeholder="Enter password" required />
                                    {showPassword ? <FaRegEye onClick={() => setShowPassword(!showPassword)} />: <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)}/>}
                                </div>
                            </Form.Group>
                            <Form.Group className="form-check-wrap">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label>Remember me</Form.Check.Label>
                                </Form.Check>
                                <Link href="/forgotPassword" className="forgot-link">Forgot Password?</Link>
                            </Form.Group>
                            <Button type='submit' className="general-btn">Login</Button>
                        </Form>
                        <span>Don’t have an account? <Link href="/signup">Sign Up</Link></span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Login