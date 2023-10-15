import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge'; // Import Badge from Material-UI

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(1);
  const [counters, setCounters] = React.useState([1, 0, 0]); // State for counters

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIncrementCounter = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const tabCount = 3; // Change this to the number of tabs
  const tabWidth = `${100 / tabCount}%`;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ paddingTop: '2.6rem', borderColor: 'divider', maxWidth: '100%', backgroundImage: 'linear-gradient(to right, #731053, #ad2e41)' }}>
        <Tabs value={value} 
        onChange={handleChange}
         aria-label="basic tabs example" 
         TabIndicatorProps={{
          style: {
            backgroundColor: "white",
             borderBottom: '4px solid white',
          }
        }}
         textColor="white" fullWidth>
          
          <Tab
            label={
              <Badge badgeContent={counters[0]} color="secondary">
               <span style={{ color: 'white', fontWeight: 'bold' }}>Item one</span>
              </Badge>
            }
            {...a11yProps(0)}
            sx={{ flex: 1, minWidth: 0, width: tabWidth }}
            onClick={() => handleIncrementCounter(0)}
          />
          <Tab
            label={
              <Badge badgeContent={counters[1]} color="secondary">
                <span style={{ color: 'white', fontWeight: 'bold' }}>Item Two</span>
              </Badge>
            }
            {...a11yProps(1)}
            sx={{ flex: 1, minWidth: 0, width: tabWidth }}
            onClick={() => handleIncrementCounter(1)}
          />
          <Tab
            label={
              <Badge badgeContent={counters[2]} color="secondary">
                 <span style={{ color: 'white' }}>Item three</span>

              </Badge>
            }
            {...a11yProps(2)}
            sx={{ flex: 1, minWidth: 0, width: tabWidth }}
            onClick={() => handleIncrementCounter(2)}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
