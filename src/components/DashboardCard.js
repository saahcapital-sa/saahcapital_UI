import React from 'react'
import { Image} from 'react-bootstrap'

const DashboardCard = ({title, percentage, status, total, currency, image, image2}) => {
    return (
        <div className={`dashboardCard ${status}`}>
            <div className="dashboardCardContent">
                <h6>{title}</h6>
                <div className='dashboardCardInner'>
                    {percentage && <p>NAV <span>{percentage}</span></p>}
                    <h5>{total} {currency && <span>{currency}</span>}</h5>
                </div>
            </div>
            <div className="dashboardCardImg">
                {status === "plus" ? <Image src={image} /> : <Image src={image2} />}
            </div>
        </div>
    )
}

export default DashboardCard