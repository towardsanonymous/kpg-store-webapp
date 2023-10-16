import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function EditItemdrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  return (
    <div>
    
          <Button onClick={toggleDrawer( 'bottom', true)}>{ 'bottom'}</Button>
          <Drawer
            anchor={ 'bottom'}
            open={state[ 'bottom']}
            onClose={toggleDrawer( 'bottom', false)}
          >
            {/* {list(anchor)} */}
            <div className="bg-store-light itemEditContainer">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mx-2 px-2 mt-4">Edit Item</h3>
      </div>
      <hr className="mt-0" />
      <form className="mx-3 p-2" style={{ height: 'auto' }}>
        <div className="col-md-3 mb-4">
          <div className="d-flex justify-content-start align-items-center">
            <img
              src="https://titozz.in/assets/img/items/16880536318LyAOXADAL.jpg"
              alt="VEG MANCH NOODLES WITH GRAVY VEG MANCHU ()"
              className="itemEditImage mr-2"
            />
            <button type="button" className="btn btn-md btn-default">
              Change Image
            </button>
          </div>
        </div>
        <div className="form-group mb-4">
          <div className="col-md-2 pb-3">
            <p className="itemEditInputLabel">Item Name </p>
            <input
              type="text"
              name="name"
              className="itemEditTextInput"
              value="VEG MANCH NOODLES WITH GRAVY VEG MANCHU ()"
            />
          </div>
          <div className="col-md-2 pb-3">
            <p className="itemEditInputLabel">Price </p>
            <input type="text" name="price" className="itemEditTextInput" value="2.00" />
          </div>
        </div>
        <div className="mx-1 mb-4 d-flex justify-content-center">
          <button type="button" className="btn btn-md btnItemUpdateCancel mx-2" onClick={toggleDrawer( 'bottom', false)} >
            Cancel
          </button>
          <button type="submit" className="btn btn-md btnItemUpdate mx-2">
            Update
          </button>
        </div>
      </form>
    </div>
          </Drawer>
       
    </div>
  );
}
