import React from 'react';
import { Dropdown , Button} from 'react-bootstrap'
import {FiChevronDown, FiDownload} from 'react-icons/fi';

const DownloadDropdown = () => {
  return (
        <Dropdown className="downloadDropdown">
            <Dropdown.Toggle id="dropdown-basic">
                <FiDownload />
                Download
                <FiChevronDown/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                <Dropdown.Item as={Button}>Download PDF</Dropdown.Item>
                <Dropdown.Item as={Button}>Download ZIP File</Dropdown.Item>
                <Dropdown.Item as={Button}>Download XML File</Dropdown.Item>
                <Dropdown.Item as={Button}>Download CSV File</Dropdown.Item>
                <Dropdown.Item as={Button}>Download TXT File</Dropdown.Item>
                <Dropdown.Item as={Button}>Download .xls File</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
  );
};

export default DownloadDropdown;