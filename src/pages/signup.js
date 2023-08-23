import React, { useState } from 'react'
import { Row, Col, Form, Button, Dropdown, Image} from 'react-bootstrap'
import SplashScreen from "../components/SplashScreen"
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import Link from 'next/link'

const countries = [
    { id:"1", code: '(+966)', flag: "images/flag-of-Saudi-Arabia.png" },
    { id:"2", code: '(+45)', flag: "images/flag-of-United-States-of-America.png" },
    { id:"3", code: '(+14)', flag: "images/flag-of-afghanistan.png" },
    // Add more countries here..
  ];
const SignUp = () => {
    const [code, setCode] = useState("(+966)");
    const [flag, setFlag] = useState("images/flag-of-Saudi-Arabia.png");
    const [activeItemId, setActiveItemId] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const handleClick = (id) => {
        setActiveItemId(id);
        countries.map(item => {
            if(item.id == id) {
                setCode(item.code);
                setFlag(item.flag);
            }
        })
    }

    return (
        <Row  className='m-0'>
            <Col lg="6" className='p-0'>
                <SplashScreen />
            </Col>
            <Col lg="6" className='p-0'>
                <div className='signWrap'>
                    <div className='signFormCard'>
                        <h2>Signup</h2>
                        <Form className='customform'>
                            <Row>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" required />
                                </Form.Group>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" required />
                                </Form.Group>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" required />
                                </Form.Group>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <div className='selectCountryCode'>
                                        <Dropdown className='countryCode'>
                                            <Dropdown.Toggle>
                                                <Image src={flag} />{code}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {countries.map(item => 
                                                    <Dropdown.Item 
                                                        key={item.code} 
                                                        className={activeItemId === item.id ? 'active' : ''} 
                                                        onClick={() => handleClick(item.id)}
                                                        >
                                                        <Image src={item.flag} />
                                                        {item.code}
                                                    </Dropdown.Item>
                                                )}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Form.Control type="text" placeholder="(262)-3142-2134" required />
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Country" required />
                                </Form.Group>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Business Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your business name" required />
                                </Form.Group>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <div className='inputWrap'>
                                        <Form.Control  type={showPassword ? 'text' : 'password'} placeholder="Enter password" required />
                                        {showPassword ? <FaRegEye onClick={() => setShowPassword(!showPassword)} />: <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)}/>}
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} lg={6} className="mb-3">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <div className='inputWrap'>
                                        <Form.Control  type={showConfirmPassword ? 'text' : 'password'} placeholder="Repeat password" required />
                                        {showConfirmPassword ? <FaRegEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} />: <FaRegEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>}
                                    </div>
                                </Form.Group>
                            </Row>
                            <Form.Group className="form-check-wrap">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label>By Signing up, you agree to our <Link href="/">Terms of Use</Link></Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                            <Button type='submit' className="general-btn">Signup</Button>
                        </Form>
                        <span>Already have an account? <Link href="/login">Login</Link></span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default SignUp