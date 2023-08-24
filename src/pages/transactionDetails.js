import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DownloadDropdown from '../components/DownloadDropdown';
import CustomBreadcrumb from '../components/CustomBreadcrumb';

const breadcrumbData= [{
  pageName: "Wallet",
  pageUrl: "/wallet"
}]

const transactionData = [{
  label: "Transaction ID",
  text: "Building 101"
},{
  label: "Transaction Name",
  text: "Real Estate"
},{
  label: "From",
  text: "Abdulaziz"
},{
  label: "To",
  text: "Nakla"
},{
  label: "Transaction Time",
  text: "12:25 PM"
},{
  label: "Transaction Date",
  text: "Jan 25, 2023"
},{
  label: "Account No.",
  text: "1198919489222"
},{
  label: "Account ID",
  text: "ACC-7363898"
},{
  label: "Bank Account",
  text: "Alriyadh Bank"
},{
  label: "Transferred Amount",
  text: "20,000 SAR"
}]

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
            <CustomBreadcrumb 
              breadcrumbData={breadcrumbData}
            />
            <div className='transactionDetails'>
              <div className='transactionDetailsHeading'>
                <h4>Transaction Details</h4>  
                <div className='transactionStatus'>
                  <span className='status complete'>Complete</span>
                  <DownloadDropdown />
                </div>
              </div>
              <ul>
                {transactionData?.map((item, index) => 
                  <li key={index}>
                    <span>{item.label}</span>
                    <p>{item.text}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TransactionDetails