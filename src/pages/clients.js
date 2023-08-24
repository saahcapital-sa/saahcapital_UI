import React, {useState, useEffect} from 'react';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardCard from "../components/DashboardCard";
import DataTable from "../components/DataTable";
import SelectDropdown from "../components/SelectDropdown";
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import { MdOutlineEdit , MdDeleteOutline, MdUnfoldLess } from 'react-icons/md';
import Link from 'next/link';

const inlineStyles = {
  transform: "rotate(90deg)"
};

const cardDard = [{
    title: "Funds Received",
    percentage: "",
    status: "plus",
    total: "22,046,383",
    image: "images/funds-icon.svg",
    image2: "images/funds-icon-red.svg",
    currency: "sar",
  },
  {
    title: "No. Of Clients",
    percentage: "",
    status: "plus",
    total: "113",
    image: "images/client-icon.svg",
    image2: "images/client-icon-red.svg",
    currency: "",
  },
  {
    title: "Active Clients",
    percentage: "",
    status: "plus",
    total: "80",
    image: "images/client-icon.svg",
    image2: "images/client-icon-red.svg",
    currency: "",
  },
  {
    title: "Inactive Clients",
    percentage: "",
    status: "minus",
    total: "33",
    image: "images/client-icon.svg",
    image2: "images/client-icon-red.svg",
    currency: "",
  }
]

const columns = [
    {
      Header: 'Clients Name',
      accessor: 'clientsName', // Property name in your data
    },
    {
      Header: 'Account ID',
      accessor: 'accountId',
    },
    {
      Header: 'Create Account Date',
      accessor: 'createAccountDate',
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
          <Dropdown.Item as={Link} href='clientsDetails'><FiEye />View</Dropdown.Item>
          <Dropdown.Item><MdUnfoldLess style={inlineStyles}/>Change Status</Dropdown.Item>
        </DropdownButton>
      ),
    },
    // Add more columns as needed
];

const data = [{
    clientsName: 'Abdulaziz',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Active',
  },{
    clientsName: 'Mohammad Ahmad',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Active',
  },{
    clientsName: 'Mohammad Rafey',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Pending',
  },{
    clientsName: 'Abdulaziz',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Active',
  },{
    clientsName: 'Mohammad Rafey',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Inactive',
  },{
    clientsName: 'Abdulaziz',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Active',
  },{
    clientsName: 'Mohammad Ahmad',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Active',
  },{
    clientsName: 'Mohammad Rafey',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Pending',
  },{
    clientsName: 'Abdulaziz',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Active',
  },{
    clientsName: 'Mohammad Rafey',
    accountId: '1127363897',
    createAccountDate: '24-03-23',
    phonenumber: +966598370408,
    email: 'a.alnada@sbd.com',
    status: 'Inactive',
  }
];

const progressChartOptions = {
    chart: {
      type: 'areaspline',
      animation: {
        duration: 1000
      }
    },
    title: {
      text: '',
    },
    yAxis: {
      title: {
        text: 'Clients',
        style: {
          color: '#3B3C3B',
          fontSize: '16px',
          fontWeight: "500",
          lineHeight: "24px",
          fontFamily: "Readex Pro"
        }
      },
      labels: {
        style: {
          color: '#8C8C8C',
          fontSize: '11px',
          lineHeight: "16px"
        }
      },
      minPadding: 0,
      maxPadding: 0
    },
    xAxis: {
      title: {
        text: 'Date',
        style: {
          color: '#3B3C3B',
          fontSize: '16px',
          fontWeight: "500",
          lineHeight: "24px",
          fontFamily: "Readex Pro"
        }
      },
      categories: ['22 May', '23 May', '24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '01 June', '02 June', '03 June'],
      labels: {
        style: {
          color: '#8C8C8C',
          fontSize: '11px',
          lineHeight: "16px"
        }
      }
    },
    series: [{
      name: "clients",
      data: [110, 180, 75, 150, 255, 175, 225, 195, 135, 85, 220],
      color: '#35B876',
    }],
}

const Clients = () => {
    const [foldSidebar, setFoldSidebar] = useState(false)
    const className = foldSidebar ? 'sidebar-close' : '';
    useEffect(() => {
      Highcharts.setOptions({
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
            fillColor: {
              linearGradient: [0, 0, 0, 300],
              stops: [
                [0, Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0.33)
                .get("rgba"),],
                [
                  1,
                  Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get("rgba"),
                ],
              ],
            },
          },
        },
        credits: {
          enabled: false
        },
      });
    }, []);
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
                <div className="dashboardContent overview">
                    <h3>Overview</h3>
                    <Row className='cardRow'>
                        {cardDard.map(item => 
                            <Col key={item.title} className='cardCol'>
                                <DashboardCard 
                                    title= {item.title}
                                    percentage= {item.percentage}
                                    status= {item.status}
                                    total= {item.total}
                                    image= {item.image}
                                    image2= {item.image2}
                                    currency= {item.currency}
                                />
                            </Col>
                        )}
                    </Row>
                    <div className='progressChart mb-4'>
                        <div className='progressChartHeading'>
                          <h4>Progress Chart</h4>
                          <SelectDropdown/>
                        </div>
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={progressChartOptions}
                        />
                    </div>
                    <div className="fundRequestsWrap">
                      <h3>Clients</h3>
                      <DataTable 
                        columns = {columns}
                        data = {data}
                        search = {true}
                        downloadDropdown = {true}
                        sortby = {true}
                        filter = {true}
                        filterArray = {["Active" , "Pending", "Inactive"]} 
                        pagination = {true}
                        perpage = {true}
                      />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients 