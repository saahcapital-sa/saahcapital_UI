import React, {useState} from 'react';
import { Dropdown , Button} from 'react-bootstrap'
import {FiChevronDown, FiDownload} from 'react-icons/fi';

const SortDropdown = () => {
    const [active, setActive] = useState("Daily");

    const handleClick = (e) => {
        setActive(e);
    }
    
    return (
        <Dropdown className="selectDropdown">
            <Dropdown.Toggle id="dropdown-basic">{active}<FiChevronDown/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                <Dropdown.Item as={Button} onClick={(e) => handleClick(e.target.textContent)}>Daily</Dropdown.Item>
                <Dropdown.Item as={Button} onClick={(e) => handleClick(e.target.textContent)}>Weekly</Dropdown.Item>
                <Dropdown.Item as={Button} onClick={(e) => handleClick(e.target.textContent)}>Monthly</Dropdown.Item>
                <Dropdown.Item as={Button} onClick={(e) => handleClick(e.target.textContent)}>Yearly</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortDropdown;