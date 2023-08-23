import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

const UpdateAccountDetail = ({editProfile, clientData}) => {
    return (
        <div className="acccountDetailCard">
            <div className="acccountDetailHeading">
                <h3>Account Details</h3>
            </div>
            {editProfile ?
                <Form className='customform'>
                    {clientData.map(item =>
                    <Row>
                        <Form.Group as={Col} lg={6} className="mb-4">
                            <Form.Label>Fund Name</Form.Label>
                            <div className='inputWrap'>
                                <Form.Control  type='text' value={item.name} required />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} lg={6} className="mb-4">
                            <Form.Label>Email</Form.Label>
                            <div className='inputWrap'>
                                <Form.Control  type='text' value={item.email} required readOnly/>
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} lg={6}>
                                <Form.Label>Client ID</Form.Label>
                                <div className='inputWrap'>
                                    <Form.Control  type='text' value={item.clientId} required readOnly/>
                                </div>
                        </Form.Group>
                        <Form.Group as={Col} lg={6}>
                            <Form.Label>Phone Number</Form.Label>
                            <div className='inputWrap'>
                                <Form.Control  type='text' value={item.phoneNumber} required />
                            </div>
                        </Form.Group>
                    </Row>
                    )}
                </Form> :
                <ul className="acccountDetailContent">
                    {clientData.map(item =>
                        <>
                            <li><span>Full Name:</span><p>{item.name}</p></li>
                            <li><span>Email:</span><p>{item.email}</p></li>
                            <li><span>Client ID:</span><p>{item.clientId}</p></li>
                            <li><span>Phone Number:</span><p>{item.phoneNumber}</p></li>
                        </>
                    )}
                </ul>
            }
        </div>
    )
}
export default UpdateAccountDetail