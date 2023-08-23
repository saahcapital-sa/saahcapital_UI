import React, {useState} from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DownloadDropdown from '../components/DownloadDropdown';


const TransactionDetails = () => {
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
              pageTitle= "Dashboard"
          />
          <div className="dashboardContent">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Wallet</Breadcrumb.Item>
              <Breadcrumb.Item active>Transaction Details</Breadcrumb.Item>
            </Breadcrumb>
            <div className='transactionDetails'>
              <div className='transactionDetailsHeading'>
                <h4>Transaction Details</h4>  
                <div className='transactionStatus'>
                  <span className='status complete'>Complete</span>
                  <DownloadDropdown />
                </div>
              </div>
              <ul>
                <li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li>
                <li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li><li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li><li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li><li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li><li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li><li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li><li>
                  <span>Name on Card</span>
                  <p>Ahmed</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TransactionDetails