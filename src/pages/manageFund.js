import React, {useState} from 'react'
import {Form, Row, Col, Button } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import ExcelUploader from "../components/ExcelUploader";
import UploadJPEG from "../components/JPGImageUploader";
import DataTable from "../components/DataTable";
import { MdOutlineEdit , MdDeleteOutline } from 'react-icons/md';
import CustomBreadcrumb from '../components/CustomBreadcrumb';
import Link from 'next/link';

const columns = [
    {
      Header: 'Announced Date',
      accessor: 'announcedDate', // Property name in your data
    },
    {
      Header: 'Eligibility Date',
      accessor: 'eligibilityDate',
    },
    {
      Header: 'Distribution Date',
      accessor: 'distributionDate',
    },
    {
      Header: 'Distribution Way',
      accessor: 'distributionWay',
    },
    {
      Header: 'Dividend Per Share (SAR)',
      accessor: 'dividendPerShare',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: () => (
        <div className='actionBtns'>
          <Link className='actionEditBtn' href="/editFund"><MdOutlineEdit /></Link>
          <Button type="button" className='actionDeleteBtn'><MdDeleteOutline /></Button>
        </div>
      ),
    },
    // Add more columns as needed
];

const data = [
  {
    announcedDate: '07/08/2023',
    eligibilityDate: '10/09/2023',
    distributionDate: '27/09/2023',
    distributionWay: 'Account Transfer',
    dividendPerShare: '0.4554',
  },
  {
    announcedDate: '07/08/2023',
    eligibilityDate: '10/09/2023',
    distributionDate: '27/09/2023',
    distributionWay: 'Account Transfer',
    dividendPerShare: '0.4554',
  },{
    announcedDate: '07/08/2023',
    eligibilityDate: '10/09/2023',
    distributionDate: '27/09/2023',
    distributionWay: 'Account Transfer',
    dividendPerShare: '0.4554',
  },{
    announcedDate: '07/08/2023',
    eligibilityDate: '10/09/2023',
    distributionDate: '27/09/2023',
    distributionWay: 'Account Transfer',
    dividendPerShare: '0.4554',
  },{
    announcedDate: '07/08/2023',
    eligibilityDate: '10/09/2023',
    distributionDate: '27/09/2023',
    distributionWay: 'Account Transfer',
    dividendPerShare: '0.4554',
  },
];

const breadcrumbData= [{
    pageName: "Administrative",
    pageUrl: "/addFund"
}]

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
                <div className="dashboardContent">
                    <CustomBreadcrumb 
                        breadcrumbData={breadcrumbData}
                    />
                    <div className="fundManage">
                        <Form className='customform'>
                            <div className="heading-upload-img mb-3">
                                <h2>Add Fund</h2> 
                                <UploadJPEG />
                            </div>
                            <Form.Group className="mb-4">
                                <Form.Label>Upload Excel File</Form.Label>
                                <ExcelUploader />
                            </Form.Group>
                            <span>OR</span>                      
                            <h3>Manually Add</h3>
                            <Row>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Fund Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter fund name" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Fund Size (SAR)</Form.Label>
                                    <Form.Control type="text" placeholder="120M" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Add Description</Form.Label>
                                    <Form.Control type="text" placeholder="Write description here..." required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Valuation Date</Form.Label>
                                    <Form.Control type="date" placeholder="Select" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Unit Price (SAR)</Form.Label>
                                    <Form.Control type="number" placeholder="15.335" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Current Price (SAR)</Form.Label>
                                    <Form.Control type="number" placeholder="15.335" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Average Cost (SAR)</Form.Label>
                                    <Form.Control type="number" placeholder="15.335" required />
                                </Form.Group>
                                 <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Quantity Units</Form.Label>
                                    <Form.Control type="number" placeholder="110" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder="Equity" required />
                                </Form.Group>
                                 <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Risk Level</Form.Label>
                                    <Form.Control type="text" placeholder="High" required />
                                </Form.Group>
                                 <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Fund Number</Form.Label>
                                    <Form.Control type="number" placeholder="13489999" required />
                                </Form.Group>
                                 <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Leverage</Form.Label>
                                    <Form.Control type="text" placeholder="1.5%" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Subscription</Form.Label>
                                    <Form.Control type="number" placeholder="5000" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Profit YTD</Form.Label>
                                    <Form.Control type="text" placeholder="+12.47%" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Management Fees</Form.Label>
                                    <Form.Control type="text" placeholder="1.5%" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Expense Ratio</Form.Label>
                                    <Form.Control type="text" placeholder="2.76%" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Subs. Charge</Form.Label>
                                    <Form.Control type="text" placeholder="2.0%" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Announcement Days</Form.Label>
                                    <Form.Control type="text" placeholder="Daily" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Fund Objective</Form.Label>
                                    <Form.Control type="text" placeholder="Income" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Fund Currency</Form.Label>
                                    <Form.Control type="text" placeholder="SAR" required />
                                </Form.Group>
                            </Row>
                            <h3>Add Dividends</h3>
                            <Row>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Announced Date</Form.Label>
                                    <Form.Control type="date" placeholder="Select date" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Eligibility Date</Form.Label>
                                    <Form.Control type="date" placeholder="Select date" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Distribution Date</Form.Label>
                                    <Form.Control type="date" placeholder="Select date" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Distribution Way</Form.Label>
                                    <Form.Control type="text" placeholder="Enter distribution way" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4">
                                    <Form.Label>Dividend Per Share (SAR)</Form.Label>
                                    <Form.Control type="number" placeholder="Enter your dividend share" required />
                                </Form.Group>
                                <Form.Group as={Col} md={6} className="mb-4 addRowBtn">
                                    <Button type='submit' className="general-btn">Add Row</Button>
                                </Form.Group>
                            </Row>
                            <div className='mb-4'>
                                <DataTable 
                                    columns = {columns}
                                    data = {data}
                                    search = {false}
                                    downloadDropdown = {false}
                                    sortby = {false}
                                    filter = {false}
                                    filterArray = {[]}
                                    pagination = {false}
                                    perpage = {false}
                                    showSelectColumn = {false}
                                />
                            </div>
                            <div className='formBtn'>
                                <Button type='button' className="tranparent-gray-btn">Cancel</Button>
                                <Button type='submit' className="general-btn">Add</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageFund 