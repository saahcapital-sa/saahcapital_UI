import React, {useState} from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import SettingSidebar from "../components/SettingSidebar";
import DataTable from "../components/DataTable";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';

const columns = [
    {
      Header: 'Subject',
      accessor: 'subject', // Property name in your data
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Created By',
      accessor: 'createdby',
    },
    {
      Header: 'Created Time',
      accessor: 'createdtime',
    },
    {
      Header: 'Created Date',
      accessor: 'createddate',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <span className={`status ${value.toLowerCase()}`}>{value}</span>
      ),
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: () => (
        <DropdownButton id="dropdown-basic-button" className="actionsDropdown" title={<BsThreeDotsVertical />}>
          <Dropdown.Item><MdDeleteOutline />Delete</Dropdown.Item>
          <Dropdown.Item><FiEye />View</Dropdown.Item>
        </DropdownButton>
      ),
    },
    // Add more columns as needed
];

const data = [
  {
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Closed',
  },
  {
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'In Progress',
  }, 
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Closed',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Closed',
  },
  {
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'In Progress',
  },
  {
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  },{
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Closed',
  },
  {
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'In Progress',
  }, 
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Closed',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Closed',
  },
  {
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  },
  {
    subject: "Login Issue",
    type: "Urgent",
    createdby: 'Abdulaziz',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'In Progress',
  },
  {
    subject: "Payment Issue",
    type: "Urgent",
    createdby: 'Mohammad Ahmad',
    createdtime: '4:30 PM',
    createddate: '24-03-23',
    status: 'Open',
  }
];

const filterArray =[{status: "Complete"} , {status: "incomplete"}]

const Support = () => {
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
                        <h3>Support</h3>
                        <div className="settingRow">
                            <div className="settingSidebarCol">
                                <SettingSidebar />
                            </div>
                            <div className="settingContentCol">
                                <div className="SupportCard">
                                    <DataTable 
                                        columns = {columns}
                                        data = {data}
                                        search = {true}
                                        downloadDropdown = {false}
                                        sortby = {false}
                                        filter = {true}
                                        filterArray = {["Open" , "Close", "Pending"]}
                                        pagination = {false}
                                        perpage = {false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support