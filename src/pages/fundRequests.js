import React, {useState} from 'react';
import Link from 'next/link'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import TableTabs from "../components/TableTabs";
import DataTable from "../components/DataTable";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import { MdOutlineEdit , MdDeleteOutline, MdUnfoldLess } from 'react-icons/md';
import CustomBreadcrumb from '../components/CustomBreadcrumb';

const inlineStyles = {
  transform: "rotate(90deg)"
};

const columns = [
    {
      Header: 'Clients Name',
      accessor: 'clientsname', // Property name in your data
    },
    {
      Header: 'Account ID',
      accessor: 'accountid',
    },
    {
      Header: 'Fund ID',
      accessor: 'fundid',
    },
    {
      Header: 'Phone Number',
      accessor: 'phonenumber',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Invested Amount',
      accessor: 'investedamount',
    },
    {
      Header: 'Invested Date',
      accessor: 'investeddate',
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
          <Dropdown.Item><MdOutlineEdit />Edit</Dropdown.Item>
          <Dropdown.Item><MdDeleteOutline />Delete</Dropdown.Item>
          <Dropdown.Item as={Link} href='/viewFundRequests'><FiEye />View</Dropdown.Item>
          <Dropdown.Item><MdUnfoldLess style={inlineStyles}/>Change Status</Dropdown.Item>
        </DropdownButton>
      ),
    },
    // Add more columns as needed
];

const data = [
  {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Rejected',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  }, {
    clientsname: 'Abdulaziz',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
  {
    clientsname: 'Mohammad Ahmad',
    accountid: 'ACC-7363897',
    fundid: 12569,
    phonenumber: +966598370408,
    email: 'a.alnada@...',
    investedamount: '120M',
    investeddate: '24-03-23',
    status: 'Accepted',
  },
];

const breadcrumbData= [{
  pageName: "Administrative",
  pageUrl: "/administrative"
}]

const tableTabsLabel = [{
  tabLabel: "SBD Client Request"
},{
  tabLabel: "Redemption Requests"
}]

const FundRequests = () => {
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
                    <div className="fundRequestsWrap">
                      <h3 className='mb-4'>Fund Requests</h3>
                      < TableTabs
                        tableTabsLabel= {tableTabsLabel}
                      />
                      <DataTable 
                        columns = {columns}
                        data = {data}
                        search = {true}
                        downloadDropdown = {true}
                        sortby = {true}
                        filter = {true}
                        filterArray = {["Accepted" , "Rejected"]} 
                        pagination = {true}
                        perpage = {true}
                      />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundRequests