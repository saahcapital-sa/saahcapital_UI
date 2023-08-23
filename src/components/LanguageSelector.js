import React, { useState } from 'react'
import { Dropdown} from 'react-bootstrap';
import {VscGlobe} from "react-icons/vsc";
import {FiChevronDown} from 'react-icons/fi';

const LanguageSelector = () => {
    const [dropdownVal, setDropdownVal] = useState("en");

    const handleClick = (e) => {
        setDropdownVal(e.target.innerText);
    }
    return (
        <Dropdown className="languageSelector">
            <Dropdown.Toggle id="dropdown-basic">
                <VscGlobe /> 
                {dropdownVal}
                <FiChevronDown/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                <Dropdown.Item onClick={handleClick}>DE</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>FR</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>RU</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>ES</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>IT</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>PT</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageSelector 