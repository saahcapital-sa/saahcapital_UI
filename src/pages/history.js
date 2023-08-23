import React, {useState} from 'react'
import { Image, Form } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import SettingSidebar from "../components/SettingSidebar";
import { BiSearch } from 'react-icons/bi'

const notiHistoryData = [{
    image: "images/profileImg.png",
    shortName: "AH",
    name: "Abu-Hamza",
    heading: "change wallet history status from",
    status: "(incomplete-Complete)",
    time: "Today at 9:42 AM",
},{
    image: "",
    shortName: "AZ",
    name: "Arslan Zubair",
    heading: "change wallet history status from",
    status: "(incomplete-Complete)",
    time: "Today at 9:42 AM",
},{
    image: "images/profileImg.png",
    shortName: "AH",
    name: "Abu-Hamza",
    heading: "accept fund request of",
    status: "Rehan",
    time: "Today at 9:42 AM",
},{
    image: "",
    shortName: "AZ",
    name: "Arslan Zubair",
    heading: "change wallet history status from ",
    status: "(incomplete-Complete)",
    time: "Today at 9:42 AM",
},{
    image: "images/profileImg.png",
    shortName: "AH",
    name: "Abu-Hamza",
    heading: "accept fund request of",
    status: "Rehan",
    time: "Today at 9:42 AM",
}]

const History = () => {
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
                    <div className="settingWrap">
                        <h4>History</h4>
                        <div className="settingRow">
                            <div className="settingSidebarCol">
                                <SettingSidebar />
                            </div>
                            <div className="settingContentCol">
                                <div className="notificationFilter">
                                    <div className='searchWrap'>
                                        <BiSearch />
                                        <Form.Control  
                                            type="search" 
                                            placeholder="Search..." 
                                        />
                                    </div>
                                </div>
                                <div className="notification-wrap">
                                    <div className="notification-heading">
                                        <h3>Today History</h3>
                                    </div>
                                    <ul className="notifications-list">
                                        {notiHistoryData.map(item => <li key={item.name}>
                                            <div className="notiImg">
                                                {item.image ? <Image src={item.image} /> : <span>{item.shortName}</span>}
                                            </div>
                                            <div className="notiContent">
                                                <h6> {item.name} <p>{item.heading}</p> <span>{item.status}</span></h6>
                                                <span>{item.time}</span>
                                            </div>
                                        </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="notification-wrap">
                                    <div className="notification-heading">
                                        <h3>Yesterday History</h3>
                                    </div>
                                    <ul className="notifications-list">
                                        {notiHistoryData.map(item => <li key={item.name}>
                                            <div className="notiImg">
                                                {item.image ? <Image src={item.image} /> : <span>{item.shortName}</span>}
                                            </div>
                                            <div className="notiContent">
                                                <h6> {item.name} <p>{item.heading}</p> <span>{item.status}</span></h6>
                                                <span>{item.time}</span>
                                            </div>
                                        </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History