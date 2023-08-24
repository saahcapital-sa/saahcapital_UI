import React, {useState} from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import TableTabs from "../components/TableTabs";
import DataTable from "../components/DataTable";
import CustomBreadcrumb from '../components/CustomBreadcrumb';
import AccountDetail from '../components/AccountDetail';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import { MdOutlineEdit , MdDeleteOutline } from 'react-icons/md';

const breadcrumbData= [{
  pageName: "Clients",
  pageUrl: "/clients"
},{
  pageName: "Clients Details",
  pageUrl: "/clientsDetails"
}]

const columns = [
  {
    Header: 'Transaction ID',
    accessor: 'transactionId', // Property name in your data
  },
  {
    Header: 'Transaction Date',
    accessor: 'transactionDate',
  },
  {
    Header: 'Transaction Amount',
    accessor: 'transactionAmount',
  },
  {
    Header: 'Transaction Time',
    accessor: 'transactionTime',
  },
  {
    Header: 'Transaction From',
    accessor: 'transactionFrom',
  },
  {
    Header: 'Transaction To',
    accessor: 'transactionTo',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }) => (
      <span className={`status ${value.toLowerCase()}`}>{value}</span>
    ),
  },
  {
    Header: 'Actions',
    accessor: 'actions',
    Cell: () => (
      <DropdownButton id="dropdown-basic-button" className="actionsDropdown" title={<BsThreeDotsVertical />}>
        <Dropdown.Item as={Button}><MdOutlineEdit />Edit</Dropdown.Item>
        <Dropdown.Item as={Button}><MdDeleteOutline />Delete</Dropdown.Item>
        <Dropdown.Item href="/transactionDetails"><FiEye />View</Dropdown.Item>
      </DropdownButton>
    ),
  },
  // Add more columns as needed
];

const data = [
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Bank Account",
  transactionTo: 'Owner Wallet',
  status: 'Incomplete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Owner Wallet",
  transactionTo: 'Client Wallet',
  status: 'Complete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Client Wallet",
  transactionTo: 'Owner Wallet',
  status: 'Complete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Bank Account",
  transactionTo: 'Owner Wallet',
  status: 'Incomplete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Owner Wallet",
  transactionTo: 'Client Wallet',
  status: 'Complete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Client Wallet",
  transactionTo: 'Owner Wallet',
  status: 'Complete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Bank Account",
  transactionTo: 'Owner Wallet',
  status: 'Incomplete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Owner Wallet",
  transactionTo: 'Client Wallet',
  status: 'Complete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Client Wallet",
  transactionTo: 'Owner Wallet',
  status: 'Complete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Bank Account",
  transactionTo: 'Owner Wallet',
  status: 'Incomplete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Owner Wallet",
  transactionTo: 'Client Wallet',
  status: 'Complete',
},
{
  transactionId: 'TRX-6347623',
  transactionDate: '24-03-23',
  transactionAmount: "120,000 SAR",
  transactionTime: "4:00 PM",
  transactionFrom: "Client Wallet",
  transactionTo: 'Owner Wallet',
  status: 'Complete',
},
];

const tableTabsLabel = [{
  tabLabel: "All  Transaction"
},{
  tabLabel: "Subscriptions"
},{
  tabLabel: "Redemptions"
}]

const TransactionHistory = () => {
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
          <AccountDetail />
          <div className="fundRequestsWrap">
            <h3>Wallet History</h3>
            <TableTabs 
              tableTabsLabel= {tableTabsLabel}
            />
            <DataTable 
              columns = {columns}
              data = {data}
              search = {true}
              downloadDropdown = {true}
              sortby = {true}
              filter = {true}
              filterArray = {["Complete" , "Incomplete"]}
              pagination = {true}
              perpage = {true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory