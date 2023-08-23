import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import { Button, Image } from 'react-bootstrap';
import DashboardHeader from "../components/DashboardHeader";
import SettingSidebar from "../components/SettingSidebar";
import UpdateAccountDetail from "../components/UpdateAccountDetail";
import UpdatePassword from "../components/UpdatePassword";
import { FiCamera, FiEdit } from 'react-icons/fi';

const clientData = [{
    name: "Abdulaziz",
    email: "abdulaziz@example.com",
    clientId: "1127363897",
    phoneNumber: "+966598370408",
    password: "admin12345",
}]

const Profile = () => {
    const [foldSidebar, setFoldSidebar] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
    const className = foldSidebar ? 'sidebar-close' : '';
    return (
        <div className={`dashboardWrap ${className}`}>
            <Sidebar
                foldSidebar={foldSidebar}
                setFoldSidebar={setFoldSidebar}
            />
            <div className="dashboardContentWrap">
                <DashboardHeader
                    pageTitle="Setting"
                />
                <div className="dashboardContent">
                    <div className="settingWrap">
                        <h3>Profile</h3>
                        <div className="settingRow">
                            <div className="settingSidebarCol">
                                <SettingSidebar />
                            </div>
                            <div className="settingContentCol">
                                <div className="editProfileCard">
                                    <div className="editProfileContentWrap">
                                        <div className="editProfileImg">
                                            <Image src="images/profileImg.png" />
                                            <Button type="button">
                                                <FiCamera />
                                            </Button>
                                        </div>
                                        <div className="editProfileContent">
                                            <h6>Abdulaziz</h6>
                                            <p>abdulaziz@example.com</p>
                                        </div>
                                    </div>
                                    <Button type="button" className="editProfileBtn" onClick={() => setEditProfile(!editProfile)}>
                                        <FiEdit /> Edit Profile
                                    </Button>
                                </div>

                                <UpdateAccountDetail
                                    editProfile={editProfile}
                                    clientData={clientData}
                                />

                                <UpdatePassword/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile