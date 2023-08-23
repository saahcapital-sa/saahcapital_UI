import React from 'react'
import { Image } from 'react-bootstrap';
import Link from 'next/link'

const AddNewFund = ({ image, heading, description, linkText, linkUrl}) => {
    return (
        <div className='addNewCard'>
            <div className='addNewImg'>
                <Image src={image} />
            </div>
            <h3>{heading}</h3>
            <p>{description}</p>
            <Link href={linkUrl} className='general-btn'>{linkText}</Link>
        </div>
    )
}

export default AddNewFund