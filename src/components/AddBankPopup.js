import React from 'react'
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';

const AddBankPopup = ({setAddBankModalShow, ...props}) => {
    return (
        <Modal
            className='modal generalModal'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Bank Account</Modal.Title>
            </Modal.Header>
            <Modal.Body className="fundManage">
                <Form className='customform'>
                    <Row>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>Name on Card*</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>Card Number*</Form.Label>
                            <Form.Control type="text" placeholder="2356-4589-7890" required />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>Expiry Date*</Form.Label>
                            <Form.Control type="text" placeholder="11/20" required />
                        </Form.Group>
                        <Form.Group as={Col} md={6} className="mb-4">
                            <Form.Label>CVV Code*</Form.Label>
                            <Form.Control type="text" placeholder="Enter code" required />
                        </Form.Group>
                    </Row>
                    <div className='formBtn'>
                        <Button type='button' onClick={() => setAddBankModalShow(false)} className="tranparent-gray-btn">Cancel</Button>
                        <Button type='submit' className="general-btn">Added</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddBankPopup