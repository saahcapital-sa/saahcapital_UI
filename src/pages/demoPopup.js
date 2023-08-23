import React, {useState} from 'react';
import { Row, Col, DropdownButton, Dropdown, Button, Form, Image } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import LoadingPopup from "../components/loadingPopup";
import SuccessPopup from "../components/SuccessPopup";

const Index = () => {
    const [foldSidebar, setFoldSidebar] = useState(false)
    const className = foldSidebar ? 'sidebar-close' : '';
    
    const [loadingModalShow, setLoadingModalShow] = useState(false);
    const [successModalShow, setSuccessModalShow] = useState(false);
   
    return (
      <>
      <div className={`dashboardWrap ${className}`}>
        <Sidebar 
          foldSidebar = {foldSidebar}
          setFoldSidebar = {setFoldSidebar}
        />
        <div className="dashboardContentWrap">
          <DashboardHeader 
              pageTitle= "Dashboard"
          />
          <div className="dashboardContent">
            <Button type="button" onClick={() => setLoadingModalShow(true)} className="general-btn mb-3">
              Loading Popup
            </Button> 
            <Button type="button" onClick={() => setSuccessModalShow(true)} className="general-btn">
              Success Popup
            </Button>          
          </div>
        </div>
      </div>
      <LoadingPopup
        show={loadingModalShow}
        onHide={() => setLoadingModalShow(false)}
        setLoadingModalShow= {setLoadingModalShow}
      />
      <SuccessPopup
        show={successModalShow}
        onHide={() => setSuccessModalShow(false)}
        setSuccessModalShow= {setSuccessModalShow}
      />
    </>
  )
}

export default Index