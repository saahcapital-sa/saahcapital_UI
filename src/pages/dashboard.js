import React, {useState} from 'react';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardCard from "../components/DashboardCard";
import TableTabs from "../components/TableTabs";
import DataTable from "../components/DataTable";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import { MdOutlineEdit , MdDeleteOutline } from 'react-icons/md';


const cardDard = [{
        title: "Total Assets",
        percentage: "101.16%",
        status: "plus",
        total: "22,046,383",
        image: "images/assets-icon.svg",
        image2: "images/assets-icon-red.svg",
        currency: "sar",
    },
    {
        title: "Total Revenues",
        percentage: "37.80%",
        status: "plus",
        total: "8,238,027",
        image: "images/revenues-icon.svg",
        image2: "images/revenues-icon-red.svg",
        currency: "sar",
    },
    {
        title: "Total Expenses",
        percentage: "-4.53%",
        status: "minus",
        total: "-988,286",
        image: "images/expense-icon.svg",
        image2: "images/expense-icon-red.svg",
        currency: "sar",
    },
    {
        title: "Outstanding Units",
        percentage: "",
        status: "plus",
        total: "751,031",
        image: "images/units-icon.svg",
        image2: "images/units-icon-red.svg",
        currency: "sar",
    },
    {
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
          <Dropdown.Item><FiEye />View</Dropdown.Item>
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

const lineChartOptions = {
    title: {
        text: '',
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function() {
                return this.value+"%";
            }
        }
    },

    xAxis: {
        categories: ['06/05/2014', '07/05/2014', '08/05/2014', '09/05/2014', '10/05/2014', '11/05/2014','12/05/2014', '13/05/2014', '14/05/2014','15/05/2014', '16/05/2014', '17/05/2014','18/05/2014', '19/05/2014', '20/05/2014','21/05/2014', '22/05/2014', '23/05/2014','24/05/2014','25/05/2014']
    },

    legend: {
        align: 'right',
        verticalAlign: 'top'
    },

    plotOptions: {
        series: {
            marker: {
            	symbol: "circle",
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'TASI',
        data: [40, 100, 60, 110, 90, 85, 60, 75, 72, 80, 50, 60, 45, 60, 80, 100, 150, 80, 78, 60],
        color: '#35B876'
    }, {
        name: 'Fund',
        data: [0, -20, 0, 40, 50, 25, 40, 30, 50, 25, 20, 0, 35, 20, 50, 70, 120, 50, 58, 30],
        color: "#4F81BD"
    }],
}

const pieChartOptions = {
    chart: {
        type: 'pie'
    },
    title: {
        text: '',
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'middle',
        itemMarginBottom: 15,
        itemStyle: {
            fontSize: '11px'
        }
    },
    plotOptions: {
        pie: {
            cursor: 'pointer',
            dataLabels: {
                // enabled: false,
                alignTo: 'connectors',
                format: '{y}'+'%',
                style: {
                    fontSize: '8px',
                }
            },
            showInLegend: true
        }
    },
    tooltip: {
        useHTML: true,
        formatter: function() {
            return `<b>${this.point.name}:</b><br>${this.y}%`;
        }
    },
    
    credits: {
        enabled: false
    },
    series: [{
        data: [{
            name: 'Financials - Banks',
            y: 40.66,
            color: "#5182BE"
        },  {
            name: 'Materials',
            y: 17.82, 
            color: "#B8514D"
        },  {
            name: 'Materials',
            y: 3.5,
            color: "#9BBB5A"
        }, {
            name: 'Health Care',
            y: 5.44,
            color: "#8065A2"
        }, {
            name: 'Consumer Staples',
            y: 15.02,
            color: "#4CACC6"
        }, {
            name: 'Energy',
            y: 3.28,
            color: "#F79748"
        }, {
            name: 'Utilities',
            y: 2.02,
            color:"#2D4D75"
        }, {
            name: 'Consumer Discretionary',
            y: 3.28,
            color: "#782D2C"
        }]
    }]
}

const tableTabsLabel = [{
  tabLabel: "SBD Client Request"
},{
  tabLabel: "Redemption Requests"
}]

const Dashboard = () => {
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
                    <Row className='chartRow'>
                        <Col xl={7}>
                            <div className='lineChart'>
                                <h5>Fund's performance against TASI</h5>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={lineChartOptions}
                                />
                            </div>
                        </Col>
                        <Col xl={5}>
                            <div className='pieChart'>
                                <h5>Sector Diversification as a Percent of Fund Size</h5>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={pieChartOptions}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="fundRequestsWrap">
                      <h3>Fund Requests</h3>
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
    )
}

export default Dashboard 