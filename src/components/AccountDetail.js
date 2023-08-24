import Link from 'next/link';
import React from 'react';
import { Image, Form, Row, Col } from 'react-bootstrap';
import { LiaAngleRightSolid } from 'react-icons/lia';
import { useRouter } from 'next/router';

const AccountDetail = () => {
    const router = useRouter();

    return (
        <div className='accountDetail'>
            <div className='accountDetailHeading'>
                <h3>Account Details</h3>
                  <span className='status active'>Active</span>
            </div>
            <div className='accountDetailContent'>
                <div className='accountDetailImg'>
                    <Image src="images/accountDetailImg.png" alt="profile-img" />
                    <h4>Abd Al-Uzza</h4>
                </div>
                <Form className='customform'>
                    <Row>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value="Abdulaziz" readOnly />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value="a.alnada@sbd.com" readOnly />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>Client ID</Form.Label>
                            <Form.Control type="text" value="CI-1127363897" readOnly />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="+966598370408" readOnly />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className={router.pathname === '/clientsDetails' ? "mb-4" : "mb-2"}>
                            <Form.Label>Account ID</Form.Label>
                            <Form.Control type="text" value="ACC-13213546" readOnly />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className={router.pathname === '/clientsDetails' ? "mb-4" : "mb-2"}>
                            <Form.Label>Create Account</Form.Label>
                            <Form.Control type="text" value="March, 24 2023" readOnly />
                        </Form.Group>
                        {router.pathname === '/clientsDetails' &&
                        <Form.Group as={Col} md={6}>
                            <Link href="/transactionHistory" className='general-tranparent-btn'>See Transaction History <LiaAngleRightSolid/></Link>
                        </Form.Group>}
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default AccountDetail