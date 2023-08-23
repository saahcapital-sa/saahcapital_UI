import React, {useState} from 'react'
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import AddNewFund from "../components/AddNewFund";

const ManageFund = () => {
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
                    pageTitle= "Administrative"
                />
                <div className="dashboardContent addManage">
                    <AddNewFund
                        image= "images/funds-img.svg"
                        heading= "Add New Fund"
                        description= "Add new fund through the fields or upload excel sheet to show in dashboard."
                        linkText= "Add Fund"
                        linkUrl= "/manageFund"
                    />
                </div>
            </div>
        </div>
    )
}

export default ManageFund 