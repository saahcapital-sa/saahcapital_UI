


import React, {useState, useEffect} from 'react';
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import SelectDropdown from "../components/SelectDropdown";
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import CustomBreadcrumb from '../components/CustomBreadcrumb';
import FundInformationCard from '../components/FundInfoCard';
import EquityFundCard from '../components/EquityFundCard';


const breadcrumbData= [{
  pageName: "Administrative",
  pageUrl: "/addFund"
},{
  pageName: "Manage Fund",
  pageUrl: "/manageFund"
}]

const progressChartOptions = {
    chart: {
      type: 'area',
      animation: {
        duration: 1000
      }
    },
    title: {
      text: '',
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: '#3B3C3B',
          fontSize: '16px',
          fontWeight: "500",
          lineHeight: "24px",
          fontFamily: "Readex Pro"
        }
      },
      minPadding: 0,
      maxPadding: 0,
      opposite: true
    },
    xAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: '#3B3C3B',
          fontSize: '16px',
          fontWeight: "500",
          lineHeight: "24px",
          fontFamily: "Readex Pro"
        }
      },
      categories: [
        'December, 01 2022', 
        'December, 02 2022', 
        'December, 03 2022',
        'December, 04 2022',
        'December, 05 2022',
        'December, 06 2022',
        'December, 07 2022',
        'December, 08 2022',
        'December, 09 2022',
        'December, 10 2022',
        'December, 11 2022', 
        'December, 12 2022', 
        'December, 13 2022',
        'December, 14 2022',
        'December, 15 2022',
        'December, 16 2022',
        'December, 17 2022',
        'December, 18 2022',
        'December, 19 2022',
        'December, 20 2022',
        'December, 21 2022', 
        'December, 22 2022', 
        'December, 23 2022',
        'December, 24 2022',
        'December, 25 2022',
        'December, 26 2022',
        'December, 27 2022',
        'December, 28 2022',
        'December, 29 2022',
        'December, 30 2022',
      ],
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>' +'Price: ' +'{value}'+ '<br/>'
    }, 
    series: [{
      data: [22.5, 26.6, 22.8, 30.8, 29, 29.5, 30, 34.5, 30.5, 26.5, 23.5, 32.5, 28.2, 22.5, 26.6, 22.8, 30.8, 29, 29.5, 30, 34.5, 30.5, 26.5, 23.5, 32.5, 28.2, 22.3, 34.5, 30.5, 26.5,],
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
                <div className="dashboardContent">
                  <CustomBreadcrumb 
                    breadcrumbData={breadcrumbData}
                  />
                  <EquityFundCard />
                  <div className='aboutFund'>
                    <span>About Funds</span>
                    <p>Al-Watani Saudi Equity Fund is a public open-ended fund that invest in companies listed in The Kingdom of Saudi Arabia, and are the constituents of S&P Saudi Arabia Domestic Total Return in Local Currency Index</p>
                  </div>
                  <FundInformationCard />
                  <div className='proformanceChartCard mb-4'>
                    <h5>Performance Fund</h5>
                    <div className='progressChartHeading'>
                      <div className='todayReport'>
                        <h4><span className='nav'>NAV</span>29.00 <span>SAR</span></h4>
                        <p>+3.42 (5.3%) Today</p>
                      </div>
                      <SelectDropdown/>
                    </div>
                    <div className='proformanceChart'>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={progressChartOptions}
                      />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Clients 