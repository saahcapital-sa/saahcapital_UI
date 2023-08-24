import Link from 'next/link';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { MdOutlineEdit } from 'react-icons/md';

const fundInfoData = [{
    label: "Fund Size",
    text: "150 M "
},{
    label: "Unit Price",
    text: "120 SAR"
},{
    label: "Profit YTD",
    text: "0.47%"
},{
    label: "Expense Ratio",
    text: "2.76%"
},{
    label: "Management fees",
    text: "1.5%"
},{
    label: "Min. Subs",
    text: "50000"
},{
    label: "Current Price (SAR)",
    text: "15.335"
},{
    label: "Average Price (SAR)",
    text: "15.335"
},{
    label: "Quantity Units",
    text: "110"
},{
    label: "Category",
    text: "Equity"
},{
    label: "Risk Level",
    text: "High"
},{
    label: "Leverage",
    text: "1.5%"
},{
    label: "Fund Number",
    text: "15.335"
},{
    label: "Subscription",
    text: "5000"
},{
    label: "Subs. Charge",
    text: "2.0%"
},{
    label: "Announcement Days",
    text: "Daily"
},{
    label: "Fund Objective",
    text: "Income"
},{
    label: "Fund Currency",
    text: "SAR"
}]

const FundInfoCard = () => {
    return (
        <div className='fundInfoCard'>
            <div className='fundInfoHeading'>
                <div className='fundInfo'>
                    <h3>Fund Information</h3>
                    <div className='fundBy'>
                        <Image src="images/bankLogo.svg" alt="company-logo" />
                        <div className='fundByContent'>
                            <h6>Bait Al Mal Al Khaleeji</h6>
                            <p>Funds Manager</p>
                        </div>
                    </div>
                </div>
                <div className='editFund'>
                    <Link href="/editFund" className='general-tranparent-btn'>< MdOutlineEdit /> Edit Fund</Link>
                </div>
            </div>
            <ul className='fundInfoDetail'>
                {fundInfoData?.map((item, index) => 
                    <li key={index}>
                        <span>{item.label}</span>
                        <p>{item.text}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FundInfoCard 