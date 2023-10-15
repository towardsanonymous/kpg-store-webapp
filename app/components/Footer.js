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
        padding: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}
    >
      <HomeIcon/>
      Home
    </button>
    <button
      onClick={() => handleChange('past')}
      style={{
        padding: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}
    >
      <WatchLaterOutlinedIcon/>
      Past
    </button>
    <div>
    <button
      onClick={() => handleChange('notifications')}
      style={{
        padding: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}
    >
      <div className='nearMe-button'>
      <NotificationsIcon/>
    
        
      </div>
      <span class="notification-badge" style={{"background-color":" rgb(255, 204, 0);"}}>5</span>
      
    </button>
    </div>
    <button
      onClick={() => handleChange('menu')}
      style={{
        padding: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}
    >
      <ListIcon/>
      Menu
    </button>
    <button
      onClick={() => handleChange('setting')}
      style={{
        padding: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}
    >
      <SettingsIcon/>
      Setting
    </button>
  </div>
  );
}
