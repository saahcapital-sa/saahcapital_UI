import React, { useState } from 'react'
import { Dropdown, Image } from 'react-bootstrap';
import { MdLogout } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const ProfileDropdown = () => {
    return (
        <Dropdown className="profileDropdown">
            <Dropdown.Toggle id="dropdown-basic">
                <Image src="images/profileImg.png" /> 
                Abdulaziz
                <FiChevronDown/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                <Dropdown.Item className='profile'>
                    <Image src="images/profileImg.png" /> 
                    <div className='profileinner'>
                        <h6>Abdulaziz</h6>
                        <span>abdulaziz@exapmle.com</span>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item href="/"><FaRegUser /> Profile Info</Dropdown.Item>
                <Dropdown.Item href="/"><FiHelpCircle /> Support</Dropdown.Item>
                <Dropdown.Item href="/"><MdLogout /> Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileDropdown