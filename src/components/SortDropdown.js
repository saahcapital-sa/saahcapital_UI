import React from 'react';
import { Dropdown , Button} from 'react-bootstrap'
import {FiChevronDown, FiDownload} from 'react-icons/fi';

const SortDropdown = () => {
  return (
        <Dropdown className="sortDropdown">
            <Dropdown.Toggle id="dropdown-basic">
                Sort by<FiChevronDown/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                <Dropdown.Item as={Button}>New</Dropdown.Item>
                <Dropdown.Item as={Button}>Old</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
  );
};

export default SortDropdown;