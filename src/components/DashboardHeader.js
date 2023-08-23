import React from 'react'
import { Form, Image} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import {FiChevronDown} from 'react-icons/fi';
import LanguageSelector from './LanguageSelector';
import NotificationsDropdown from './NotificationsDropdown';
import ProfileDropdown from './ProfileDropdown';

const DashboardHeader = ({pageTitle}) => {
    return (
        <div className="dashboardHeader">
            <div className="dashboardTitle">
                <h6>{pageTitle}</h6>
                <div className='searchWrap customform mb-0'>
                    <BiSearch />
                    <Form.Control  type="search" placeholder="Search..." />
                </div>
            </div>
            <div className="dashboardRight customform mb-0">
                <div className='selectWrap'>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Sar</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <FiChevronDown/>
                </div>
                <LanguageSelector />
                <NotificationsDropdown />
                <ProfileDropdown />
            </div>
        </div>
    )
}

export default DashboardHeader