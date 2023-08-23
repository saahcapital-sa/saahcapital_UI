import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import SettingSidebar from "../components/SettingSidebar";
import ChatBox from "../components/ChatBox";

const ViewSupport = () => {
    const [foldSidebar, setFoldSidebar] = useState(false);
    const [tagStatus, setTagStatus] = useState("open");
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
                        <h3>Security & Privacy</h3>
                        <div className="settingRow">
                            <div className="settingSidebarCol">
                                <SettingSidebar />
                            </div>
                            <div className="settingContentCol">
                                <div className="viewSupportCard">
                                    <div className="viewSupportTop">
                                        <h6>Komba Osby <span>(Urgent)</span></h6>
                                        <div className="viewSupportInner">
                                            <p>Support Ticket <span>#21356</span></p>
                                            <span className={`tag ${tagStatus}`}>Open</span>
                                        </div>
                                    </div>
                                    <p>Diam, in vitae ante velit suscipit scelerisque commodo urna at. Arcu quam erat ac volutpat sed nunc faucibus id. Tempor adipiscing ultricies odio ipsum sed quis amet, mauris. Diam, in vitae ante velit suscipit scelerisque commodo urna at. Arcu quam erat ac volutpat sed nunc faucibus id. Tempor adipiscing ultricies odio ipsum sed quis amet, mauris.</p>
                                </div>
                                <ChatBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSupport