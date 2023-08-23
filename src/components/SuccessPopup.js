import React from 'react'
import { Button, Modal, Image } from 'react-bootstrap';

const SuccessPopup = ({setSuccessModalShow, ...props}) => {
    return (
        <Modal
            className='modal generalModal successModal'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Image src="images/check-icon-mid.svg"  className='loader' />
                <h6>Withdraw Money Successfully</h6>
                <p>Your payment has successfully been withdraw.</p>
                <Button type='submit' className="general-btn">OK</Button>
            </Modal.Body>
        </Modal>
    )
}

export default SuccessPopup