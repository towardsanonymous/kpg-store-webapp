import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

const MenuItem = ({ name, price, imageSrc }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="d-flex justify-content-between align-items-center menuSingleItem">
      <div className="d-flex justify-content-start align-items-center">
        {imageSrc && <img src={imageSrc} alt={name} className="menuItemImage" />}
        <div>
          <span className="menuItemName">{name}</span> <br />
          <span className="menuItemPrice">₹{price.toFixed(2)}</span>
        </div>
      </div>
      <div>
      <Switch
                  // checked={true}
                  // onChange={()=>{
                  //   console.log("switch clicked")
                  // }}
                //  inputProps={{ 'aria-label': 'controlled' }}
                defaultChecked 
                 inputProps={ { 'aria-label': 'Color switch demo' } }
                  color='default'
                />
      </div>
    </div>
  );
};

const MenuCategory = ({ categoryName, items }) => {
  return (
    <div className="mx-15 mb-15 menuCategoryWrapper p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="menuCategoryName">{categoryName}</div>
      </div>
      <hr />
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuCategory;
// export default MenuItem