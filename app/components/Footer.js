import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    console.log(newValue)
    console.log(event)

    setValue(newValue);
  };

  return (
<div
  style={{
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    background: '#fff', // Set your background color
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
  }}
>
  <button
    onClick={() => handleChange('/')}
    style={{
      padding: '5px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <HomeIcon style={{ color: "green" }} />
    <span style={{ marginTop: '2px' ,color: "green" }}>Home</span>
  </button>
  <button
    onClick={() => handleChange('past')}
    style={{
      padding: '5px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <WatchLaterOutlinedIcon />
    <span style={{ marginTop: '2px' }}>Past</span>
  </button>
  <button
    className='position-relative'
    onClick={() => handleChange('notifications')}
    style={{
      padding: '15px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
       <Badge badgeContent={1} sx={{top:'-9px',right:'-4px'}} color="secondary">
       <div className='nearMe-button'></div>
       </Badge>
 
    {/* <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{left:"50px" ,top:"-0.5rem"}}>
      5
    </span> */}

  </button>
  <button
    onClick={() => handleChange('menu')}
    style={{
      padding: '5px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <ListIcon />
    <span style={{ marginTop: '3px' }}>Menu</span>
  </button>
  <button
    onClick={() => handleChange('setting')}
    style={{
      padding: '5px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <SettingsIcon />
    <span style={{ marginTop: '3px' }}>Setting</span>
  </button>
</div>

  );
}
