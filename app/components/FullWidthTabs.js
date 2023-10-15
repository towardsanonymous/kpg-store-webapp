import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge'; // Import Badge from Material-UI
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="orders-tab-content">
 {false&&       <div className="liveOrderList">
          <div className="text-center mt-4 emptyOrder">
            <img src="https://store.titozz.in/assets/images/empty-order.png" alt="empty order" style={{height:'70px', width:'70px'}}/>
            <p className="mt-2">No orders to show</p>
          </div>
        </div>}
        <div className="singleOrderInList position-relative">
            <a className="w-100" href="/order/1">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="uniqueOrderId">
                        <strong>OD-10-12-12OC-DL86PXJ3Y</strong>
                    </div>
                    <div className="orderTotal">₹{/* Insert the actual value here */}428</div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="mr-2">
                        <div className="orderTimerWrapper">Completed in 5 mins</div>
                    </div>
                    <div className="listSingleOrderStatus false">
                        <span>Completed</span>
                    </div>
                </div>
                <hr />
                <div className="orderList-orderItemsPreview">
                    <span className="mr-2 text-muted">
                        <span className="mr-1">8x</span>Reesce
                    </span>
                    <span className="mr-2 text-muted">
                        <span className="mr-1">8x</span>Reesce
                    </span>
                    <span className="mr-2 text-muted">
                        <span className="mr-1">5</span>more
                    </span>
                </div>
                <canvas
                    className="ink"
                    height="0"
                    width="0"
                    style={{
                        borderRadius: 'inherit',
                        height: '100%',
                        left: '0px',
                        position: 'absolute',
                        top: '0px',
                        width: '100%',
                    }}
                ></canvas>
            </a>
        </div>
      </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};





function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [counters, setCounters] = React.useState([1, 0, 0]); // State for counters

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    console.log(index)
    setValue(index);
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
    <>
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
               <span style={{ color: 'white', fontWeight: 'bold' }}>New</span>
              </Badge>
            }
            {...a11yProps(0)}
            sx={{ flex: 1, minWidth: 0, width: tabWidth }}
            onClick={() => handleIncrementCounter(0)}
          />
          <Tab
            label={
              <Badge badgeContent={counters[1]} color="secondary">
                <span style={{ color: 'white', fontWeight: 'bold' }}>Preparing</span>
              </Badge>
            }
            {...a11yProps(1)}
            sx={{ flex: 1, minWidth: 0, width: tabWidth }}
            onClick={() => handleIncrementCounter(1)}
          />
          <Tab
            label={
              <Badge badgeContent={counters[2]} color="secondary">
                 <span style={{ color: 'white' }}>self-pickup</span>

              </Badge>
            }
            {...a11yProps(2)}
            sx={{ flex: 1, minWidth: 0, width: tabWidth }}
            onClick={() => handleIncrementCounter(2)}
          />
                  <Tab
            label={
              <Badge badgeContent={counters[2]} color="secondary">
                 <span style={{ color: 'white' }}>Ongoing</span>

              </Badge>
            }
            {...a11yProps(2)}
            sx={{ flex: 1, minWidth: 0, width: tabWidth }}
            onClick={() => handleIncrementCounter(2)}
          />
        </Tabs>
      </Box>
    </Box>
         <SwipeableViews
         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
         index={value}
         onChangeIndex={handleChangeIndex}
       >
 <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>

       </SwipeableViews>
</>
  );
}
