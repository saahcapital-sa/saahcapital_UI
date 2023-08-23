import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';

const BankAccountCard = ({setAddBankModalShow}) => {
    return (
        <div className
        ="bankAccounts">
            <div className='bankAccountHeading'>
                <h4>Bank Accounts</h4>
                <Button type="button" className="general-btn" onClick={() => setAddBankModalShow(true)}><AiOutlinePlusCircle />Add Bank Account</Button>
            </div>
            <div className="bankCardDetail">
                <div className="cardDetailRow">
                    <div className="cardDetail">
                        <div className="cardDetailImg">
                            <Image src="images/mastercard.svg" />
                        </div>
                        <div className="cardDetailContent">
                            <h6>Master Card</h6>
                            <p>5300 4590 9000 3458</p>
                        </div>
                    </div>
                    <div className="bankCardBtn">
                        <Button type="button" className='editBtn'><MdEdit />Edit</Button>
                        <Button type="button" className="deleteBtn"><MdDeleteOutline /></Button>
                    </div>
                </div>
                <ul>
                    <li>
                        <span>Name on Card</span>
                        <p>Ahmed</p>
                    </li>
                    <li>
                        <span>Card Number</span>
                        <p>5300 4590 9000 3458</p>
                    </li>
                    <li>
                        <span>Expiry Date</span>
                        <p>11/20</p>
                    </li>
                    <li>
                        <span>CVV Code</span>
                        <p>568</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BankAccountCard 