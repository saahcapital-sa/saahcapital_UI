import React from 'react'
import { Modal, Image } from 'react-bootstrap';

const LoadingPopup = ({setAddBankModalShow, ...props}) => {
    return (
        <Modal
            className='modal generalModal loadingModal'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Image src="images/loading-icon.svg"  className='loader' />
                <h6>Your account is sync...</h6>
                <p>Kindly stay with us until we’re synchronize your account.</p>
            </Modal.Body>
        </Modal>
    )
}

export default LoadingPopup