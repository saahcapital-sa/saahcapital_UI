import React from 'react'
import Link from 'next/link';
import { Button, Image } from 'react-bootstrap'
import { Dropdown} from 'react-bootstrap';
import {CgBell} from "react-icons/cg";

const notiData = [{
    image: "images/profileImg.png",
    name: "AH",
    heading: "Email Message From Abu-Hamza",
    description: "new customer who waiting for you verification...",
    time: "10 minutes ago",
},{
    image: "",
    name: "RZ",
    heading: "Email Message",
    description: "You have new customer who waiting for you verification...",
    time: "1 hour ago",
},{
    image: "images/profileImg.png",
    name: "FA",
    heading: "Redemptions Transaction",
    description: "New transaction subscriptions of <span>120,000,000</span> SAR who waiting for your verification.",
    time: "2 days ago",
}]

const NotificationsDropdown = () => {
    return (
        <Dropdown className="notificationsDropdown">
            <Dropdown.Toggle id="dropdown-basic">
                <CgBell /> 
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                <div className="notiHeading">
                    <h6>Notifications (<span>12</span>)</h6>
                    <Button type="button">Clear all</Button>
                </div>
                <ul className="notifications">
                    {notiData.map(item => <li key={item.name}>
                        <Link href="/">
                            <div className="notiImg">
                                {item.image ? <Image src={item.image} /> : <span>{item.name}</span>}
                            </div>
                            <div className="notiContent">
                                <h6>{item.heading}</h6>
                                <p dangerouslySetInnerHTML={{__html: item.description}} />
                                <span>{item.time}</span>
                            </div>
                        </Link>
                    </li>
                    )}
                </ul>
                <div className="viewAllBtn">
                    <Link href="/notifications">View all</Link>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default NotificationsDropdown