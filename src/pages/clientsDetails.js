


import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DownloadDropdown from '../components/DownloadDropdown';
import CustomBreadcrumb from '../components/CustomBreadcrumb';
import AccountDetail from '../components/AccountDetail';
import { Image, Form, Accordion, Row, Col } from 'react-bootstrap';
import { FaAngleUp } from 'react-icons/fa';

const breadcrumbData= [{
  pageName: "Clients",
  pageUrl: "/clients"
}]


const ClientsDetails = () => {
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
          <div className="kycForm">
            <h4>KYC Form</h4>
            <DownloadDropdown />
          </div>
          <div className="moreInfo">
            <h4><Image src="images/personalIcon.svg" alt="Personal Information" />Personal Information</h4>
            <Form className='customform'>
              <Row>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value="Abdulaziz" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Number of Family Members</Form.Label>
                    <Form.Control type="text" value="12" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="text" value="01-01-1996" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Education</Form.Label>
                    <Form.Control type="text" placeholder="Masters" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control type="text" value="Saudi Arabia" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Annual Income</Form.Label>
                    <Form.Control type="text" value="300,000 SAR" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>ID Number/Passport</Form.Label>
                    <Form.Control type="text" placeholder="31195855" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Net Worth (Excluding House)</Form.Label>
                    <Form.Control type="text" value="250,000 SAR" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                    <Form.Label>Martial Status</Form.Label>
                    <Form.Control type="text" value="Single" readOnly />
                </Form.Group>
              </Row>
            </Form>
          </div>
          <div className="moreInfo">
            <h4><Image src="images/briefcaseIcon.svg" alt="Employer Information" /> Employer Information</h4>
            <Form className='customform'>
              <Row>
                <Form.Group as={Col} md={6} className="mb-4">
                  <Form.Label>Employer Name</Form.Label>
                  <Form.Control type="text" value="SBD" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control type="text" value="AL Rajhi" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                  <Form.Label>Employer Business Address</Form.Label>
                  <Form.Control type="text" value="Al-Riyadh" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                  <Form.Label>Bank Branch</Form.Label>
                  <Form.Control type="text" placeholder="Al-Rajhi" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="text" value="Product Manager" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mb-4">
                  <Form.Label>Account Number/IBAN</Form.Label>
                  <Form.Control type="text" value="SA399999998888766555" readOnly />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>Duration of Service</Form.Label>
                  <Form.Control type="text" placeholder="01-01-2023" readOnly />
                </Form.Group>
              </Row>
            </Form>
          </div>
          <div className="moreInfo accordionWrap">
            <h4><Image src="images/clipboardListIcon.svg" alt="General Information" /> General Information</h4>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Are you the real beneficiary of the account or a business relationship?<FaAngleUp /></Accordion.Header>
                <Accordion.Body>
                  <p>No</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Have you worked in the financial sector during the past five years?<FaAngleUp /></Accordion.Header>
                <Accordion.Body>
                  <p>No</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are you a board member, audit committee, or senior executive of a listed company?<FaAngleUp /></Accordion.Header>
                <Accordion.Body>
                  <p>No</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do you have a relationship with a member of the board of directors, audit committee, or a senior executive of a listed company? <FaAngleUp /></Accordion.Header>
                <Accordion.Body>
                  <p>No</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are you entrusted with high missions in the Kingdom or in a foreign country, or in senior management positions or a job in an international organization?<FaAngleUp /></Accordion.Header>
                <Accordion.Body>
                  <p>No</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Are you related by blood or spouse to the second degree, or is he considered close to a person charged with high missions in the Kingdom or in a foreign country, or in positions of high management or a job in an international organization?<FaAngleUp /></Accordion.Header>
                <Accordion.Body>
                  <p>No</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsDetails