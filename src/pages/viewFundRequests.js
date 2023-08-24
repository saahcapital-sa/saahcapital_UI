import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DownloadDropdown from '../components/DownloadDropdown';
import CustomBreadcrumb from '../components/CustomBreadcrumb';

const breadcrumbData= [{
  pageName: "Administrative",
  pageUrl: "/administrative"
},{
  pageName: "Client Fund Requests",
  pageUrl: "/fundRequests"
}]

const clientRequestDetailData = [{
  label: "Client Name",
  text: "Abdulaziz"
},{
  label: "Account ID",
  text: "ACC-7363897"
},{
  label: "Fund ID",
  text: "12569"
},{
  label: "Phone Number",
  text: "+966598370408"
},{
  label: "Email",
  text: "a.alnada@gmail.com"
},{
  label: "Invested Amount",
  text: "120M"
},{
  label: "Invested Date",
  text: "24-03-23"
}]

const kycInformationData = [{
  label: "Full Name",
  text: "Abd Al-Uzza"
},{
  label: "Education",
  text: "Masters"
},{
  label: "Birthday",
  text: "01-01-1996"
},{
  label: "Number of Family Members",
  text: "12"
},{
  label: "Nationality",
  text: "Saudi Arabia"
},{
  label: "Annual Income",
  text: "300,000 SAR"
},{
  label: "ID Number/Passport",
  text: "31195855"
},{
  label: "ID Number/Passport",
  text: "31195855"
},{
  label: "Martial Status",
  text: "Single"
}]

const ViewFundRequests = () => {
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
            <div className='viewFundRequests'>
              <div className='viewFundRequestsHeading'>
                <h4>SBD Client Request Detail</h4>  
                <div className='viewFundRequestsStatus'>
                  <span className='status accepted'>Accepted</span>
                  <DownloadDropdown />
                </div>
              </div>
              <ul>
                {clientRequestDetailData?.map((item, index) => 
                  <li key={index}>
                    <span>{item.label}</span>
                    <p>{item.text}</p>
                  </li>
                )}
              </ul>
              <h4>KYC Information</h4>  
              <ul>
                {kycInformationData?.map((item, index) => 
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

export default ViewFundRequests