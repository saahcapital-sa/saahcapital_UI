import React, {useState} from 'react'
import { Image, Form } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import SettingSidebar from "../components/SettingSidebar";
import { CgBell } from "react-icons/cg";
import { FiLock, FiLogOut } from "react-icons/fi";
import { TbWaveSawTool } from "react-icons/tb";

const SecurityPrivacy = () => {
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
                        <h3>Security & Privacy</h3>
                        <div className="settingRow">
                            <div className="settingSidebarCol">
                                <SettingSidebar />
                            </div>
                            <div className="settingContentCol">
                                <div className="securityPrivacy">
                                    <div className="securityOption">
                                        <div className="securityOptionContent">
                                            <h6><CgBell />Show Content Notification</h6>
                                            <p>If you are administrator, you can view and modify your data</p>
                                        </div>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label=""                                    
                                            className="customSwitch"
                                            defaultChecked
                                        />
                                    </div>
                                    <div className="securityOption">
                                        <div className="securityOptionContent">
                                            <h6><FiLock />2 Step Veriffication </h6>
                                            <p>The right to control how your information is viewed and used</p>
                                        </div>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label=""                                    
                                            className="customSwitch"
                                            defaultChecked
                                        />
                                    </div>
                                    <div className="securityOption">
                                        <div className="securityOptionContent">
                                            <h6><FiLogOut />2 Step Veriffication </h6>
                                            <p>The right to control how your information is viewed and used</p>
                                        </div>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label=""                                    
                                            className="customSwitch"
                                            defaultChecked
                                        />
                                    </div>
                                    <div className="securityCheckboxOption">
                                        <Form.Check
                                            type= "radio"
                                            label= "Immediately"                   
                                            className="customRadio"
                                            id="disabled-default-1"
                                            name="radioBtn"
                                            defaultChecked
                                        />
                                        <Form.Check
                                            type= "radio"
                                            label= "After 10 Minute"               
                                            className="customRadio"
                                            id="disabled-default-2"
                                            name="radioBtn"
                                        />
                                        <Form.Check
                                            type= "radio"
                                            label= "After 30 Minute"               
                                            className="customRadio"
                                            id="disabled-default-3"
                                            name="radioBtn"
                                        />
                                    </div>
                                    <div className="securityOption">
                                        <div className="securityOptionContent">
                                            <h6><TbWaveSawTool />Sent Activity to Email</h6>
                                            <p>The contractual relationship between the provider of a service and its user</p>
                                        </div>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label=""                                    
                                            className="customSwitch"
                                        />
                                    </div>
                                    <div className="securityOption">
                                        <div className="securityOptionContent">
                                            <h6><Image src="images/transactionIcon.svg" /> Allow system to automatically accept the requests after Two Days</h6>
                                        </div>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label=""                                    
                                            className="customSwitch"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityPrivacy