import React, {useState} from 'react';
import { Button } from 'react-bootstrap';


const TableTabs = ({tableTabsLabel}) => {   
    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index) => {
      setActiveIndex(index);
      // You can add your navigation logic here
    };
    
  return (
    <div className="tableTabs">
      {tableTabsLabel.map((label, index) => (
        <Button
          key={index}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => handleButtonClick(index)}
        >
          {label.tabLabel}
        </Button>
      ))}
    </div>
  );
};

export default TableTabs;