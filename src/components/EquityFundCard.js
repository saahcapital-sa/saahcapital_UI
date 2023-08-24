import React from 'react';
import { Image } from 'react-bootstrap';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const EquityFundCard = () => {
    return (
        <div className='equityFundCard'>
            <div className='equityFundHeading'>
                <Image src="images/bankLogo.svg" alt="company-logo" />
                <div className='equityFundHeadingInner'>
                    <h3>BMK Saudi Equity Fund</h3>
                    <ul>
                        <li>Assets Class : Equity Funds</li>
                        <li>Fund Exposure :  Local</li>
                        <li>Shariah Compliant : Yes</li>
                    </ul>
                </div>
            </div>
            <div className='equityFundContent'>
                <span className='valuationDate'>Valuation Date : Dec, 23 2023</span>
                <ul>
                    <li className='unitPrice'>
                        <p>Unit Price</p>
                        <h3>278.00 <span>SAR/Unit</span></h3>
                    </li>
                    <li className='profitYTD'>
                        <p>Profit YTD <span>(7.56%)</span></p>
                        <h3><BsArrowUpRightSquareFill />30.42</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default EquityFundCard