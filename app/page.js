"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css"
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };
export default function Home() {
  return (
    <>
      <div style={{ overflowY: 'auto', height: '100vh' }}>
        <div className="dashboardTopBlock bg-primary-gradient">
          <div className="mx-3">
            <span>Hello,</span>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="dashboardSingleStoreName">test store</span>
              </div>
              <div className="d-flex flex-column align-items-center">
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
              <img
                src="https://store.titozz.in/assets/images/store-closed.png"
                alt="Store is Closed"
                className="storeClosedNotifyArrow"
                style={{
                  animationFillMode: 'both',
                  animationDuration: '1000ms',
                  animationDelay: '250ms',
                  animationIterationCount: '1',
                  opacity: '1',
                  animationName: 'react-reveal-208273346347287-2',
                }}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center position-relative mx-3" style={{ top: '60px' }}>
            <div className="todayOrderDashboardCard" style={{ width: '48%' }}>
              <div className="dashboard-stats-card p-3">
                <div>
                  <strong>0</strong>
                  <br />
                  <span className="text-muted">Orders Today</span>
                </div>
              </div>
            </div>

            <div className="todayRevenueDashboardCard" style={{ width: '48%' }}>
              <div className="dashboard-stats-card p-3">
                <div>
                  <strong>₹0</strong>
                  <br />
                  <span className="text-muted">Revenue Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="topSellingItemsBlock mx-2 p-3" style={{ marginTop: '4rem' }}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="topSellingTitle">Top Selling Today</div>
              <img src="https://store.titozz.in/assets/images/medal.png" alt="top" style={{ width: '28px' }} />
            </div>
            <hr />
            <span className="text-muted">No orders today</span>
          </div>
        </div>
        <div className="position-relative mx-4 mt-4 mb-4">
          <div className="d-flex justify-content-start p-3 new-order-notify-dashboard">
            <div className="ringbell mr-3 text-danger">
              <i className="si si-bell"></i>
            </div>
            <div className="d-flex justify-content-between w-100">
              <div>You have <strong>1</strong> new orders.</div>
              <div><i className="si si-arrow-right"></i></div>
            </div>
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
        </div>


        <div className="d-flex justify-content-between align-items-center position-relative mx-3 dashboardTotalCardsBlock mb-5">
          <div className="totalRevenueDashboardCard" style={{ width: '60%' }}>
            <div className="dashboard-stats-card p-2">
              <div>
                <strong>₹8,413.90</strong>
                <br />
                <span className="text-muted">Total Revenue</span>
                <span className="text-muted">
                  {' '}
                  with <span className="text-dark font-w600">81</span> Sales
                </span>
              </div>
            </div>
          </div>
          <a
            className="position-relative inActiveItemDashboardCard"
            href="/inactive-items"
            style={{ width: '36%', color: 'white', textDecoration: 'none' }}
          >
            <div className="p-3 dashboardInactiveItems">
              <div>
                <strong>33</strong>
                <br />
                <span>Inactive Items</span>
              </div>
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




        <Footer />
      </div>
    </>
  )
}
