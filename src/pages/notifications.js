import React, {useState} from 'react'
import { Button, Image } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { BsCheckCircle } from 'react-icons/bs';


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

const Notifications = () => {
    const [foldSidebar, setFoldSidebar] = useState(false)
    const className = foldSidebar ? 'sidebar-close' : '';
    return (
        <div className={`dashboardWrap ${className}`}>
            <Sidebar 
                foldSidebar = {foldSidebar}
                setFoldSidebar = {setFoldSidebar}
            />
            <div className="dashboardContentWrap">
                <DashboardHeader 
                    pageTitle= "Setting"
                />
                <div className="dashboardContent">
                    <div className="notification-wrap">
                        <div className="notification-heading">
                            <h3>Your Notifications</h3>
                            <Button type='button'>Mark all as read <BsCheckCircle /></Button>
                        </div>
                        <ul className="notifications-list">
                            {notiData.map(item => <li key={item.name}>
                                <div className="notiImg">
                                    {item.image ? <Image src={item.image} /> : <span>{item.name}</span>}
                                </div>
                                <div className="notiContent">
                                    <h6>{item.heading} <p dangerouslySetInnerHTML={{__html: item.description}} /></h6>
                                    <span>{item.time}</span>
                                </div>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications