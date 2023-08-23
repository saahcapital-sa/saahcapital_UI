import React, {useState} from 'react';
import { Row, Col, DropdownButton, Dropdown, Button, Form, Image } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import TableTabs from "../components/TableTabs";
import DataTable from "../components/DataTable";
import BankAccountCard from "../components/BankAccountCard";
import AddBankPopup from "../components/AddBankPopup";
import WithdrawMoneyPopup from "../components/WithdrawMoneyPopup";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import { MdOutlineEdit , MdDeleteOutline, MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { RxCopy } from 'react-icons/rx';
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
  tabLabel: "All  Transactions"
},{
  tabLabel: "Deposite Transactions"
},{
  tabLabel: "Redemptions Transactions"
},{
  tabLabel: "Received Transactions"
},{
  tabLabel: "Withdraw Transactions"
}]

const Wallet = () => {
    const [foldSidebar, setFoldSidebar] = useState(false)
    const className = foldSidebar ? 'sidebar-close' : '';
    
  const [addBankModalShow, setAddBankModalShow] = useState(false);
  const [withdrawMoneymodalShow, setWithdrawMoneyModalShow] = useState(false);
   
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
            <div className="walletWrap">
              <div className="walletHeading">
                <h3>Wallet</h3>
                <Button type="button" onClick={() => setWithdrawMoneyModalShow(true)} className="general-tranparent-btn">
                  <Image src='images/funds-line.svg' className='blue-icon' />
                  <Image src='images/funds-line-white.svg' className='white-icon' />
                  Withdraw Money
                </Button>
              </div>
              <Row>
                <Col lg={6}>
                  <div className="balanceCard">
                    <div className="balanceHeading">
                      <h6>Total Wallet Balance</h6>
                      <div className="balanceIcon">
                        <MdOutlineAccountBalanceWallet />
                      </div>
                    </div>
                    <h2>22,046,383 <span>SAR</span></h2>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="ibanCard">
                    <div className="ibanHeading">
                      <h6>Total Wallet Balance</h6>
                      <Button type='button' className="copyBtn"><RxCopy /> Copy</Button>
                    </div>
                    <h3>SA4482973364859697859743</h3>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="paymentMethod">
              <h3>Select Payment Method</h3>
              <Row>
                <Col lg={6}>
                  <Form.Check className='chooseMethod' type="radio" id="paymentMethod1">
                    <Form.Check.Input type="radio" name="paymentMethod" defaultChecked />
                    <Form.Check.Label>
                      <div className='radioImg bankMode'>
                        <Image src="images/bankImg.svg"/>
                      </div>
                      Bank Transfer
                    </Form.Check.Label>
                  </Form.Check>
                </Col>
                <Col lg={6}>
                  <Form.Check className='chooseMethod' type="radio" id="paymentMethod1">
                    <Form.Check.Input type="radio" name="paymentMethod" />
                    <Form.Check.Label>
                      <div className='radioImg cardMode'>
                        <Image src="images/cardImg1.svg"/>
                        <Image src="images/cardImg2.svg"/>
                        <Image src="images/cardImg3.svg"/>
                      </div>
                      Card Payment
                    </Form.Check.Label>
                  </Form.Check>
                </Col>
              </Row>
            </div>
            <BankAccountCard 
              setAddBankModalShow= {setAddBankModalShow}
            />
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
                pagination = {true}
                perpage = {true}
              />
            </div>
          </div>
        </div>
      </div>
      <AddBankPopup
        show={addBankModalShow}
        onHide={() => setAddBankModalShow(false)}
        setAddBankModalShow= {setAddBankModalShow}
      />
      <WithdrawMoneyPopup
        show={withdrawMoneymodalShow}
        onHide={() => setWithdrawMoneyModalShow(false)}
        setWithdrawMoneyModalShow= {setWithdrawMoneyModalShow}
      />
    </>
  )
}

export default Wallet