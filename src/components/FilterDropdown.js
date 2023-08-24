import React from 'react';
import { Dropdown , Button} from 'react-bootstrap'
import {FiFilter} from 'react-icons/fi';

const FilterDropdown = ({filterArray}) => {
  return (
        <Dropdown className="filterDropdown">
            <Dropdown.Toggle id="dropdown-basic">
                <FiFilter />Filter
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                {filterArray?.map(item => (<Dropdown.Item as={Button} key={item}>{item}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
  );
};

export default FilterDropdown;