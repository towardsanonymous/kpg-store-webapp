import React from 'react'

function pages() {
  const orders = [
    {
      id: 1,
      orderId: 'OD-10-12-12OC-DL86PXJ3Y',
      total: 428,
      statusDetails: 'Completed in 5 mins',
      status: 'Completed',
      statusClass: 'false',
      itemQuantity: 8,
      itemName: 'Reesce',
    },
    {
      id: 2,
      orderId: 'OD-10-12-VD2F-03DGRBKKV',
      total: 75,
      statusDetails: 'Cancelled in 3 mins',
      status: 'Canceled',
      statusClass: 'listSingleOrderStatus--canceled',
      itemQuantity: 1,
      itemName: 'Reesce',
    },
    {
      id: 3,
      orderId: 'OD-10-12-VD2F-03DGRBKKV',
      total: 75,
      statusDetails: 'Cancelled in 3 mins',
      status: 'Canceled',
      statusClass: 'listSingleOrderStatus--canceled',
      itemQuantity: 1,
      itemName: 'Reesce',
    },
    {
      id: 4,
      orderId: 'OD-10-12-VD2F-03DGRBKKV',
      total: 75,
      statusDetails: 'Cancelled in 3 mins',
      status: 'Canceled',
      statusClass: 'listSingleOrderStatus--canceled',
      itemQuantity: 1,
      itemName: 'Reesce',
    },
    {
      id: 5,
      orderId: 'OD-10-12-VD2F-03DGRBKKV',
      total: 75,
      statusDetails: 'Cancelled in 3 mins',
      status: 'Canceled',
      statusClass: 'listSingleOrderStatus--canceled',
      itemQuantity: 1,
      itemName: 'Reesce',
    },
    // Add more orders as needed
  ];

  return (
   <>
   <div>
    <div class="pageTitle bg-primary-gradient">All Orders</div>


<div className='pageContents'>
<div class="orders-tab-content">
<div className="liveOrderList">
      <a href="/search-orders">
        <div className="mock-search-block mb-3 mock-search-block--sticky">
          <div className="px-15 d-flex justify-content-between searchMockInput">
            <div>
              <span>Search with Order ID...</span>
            </div>
            <div>
              <i className="si si-magnifier"></i>
            </div>
          </div>
        </div>
      </a>

      {orders.map((order) => (
        <div key={order.id} className="singleOrderInList position-relative">
          <a className="w-100" href={`/order/${order.id}`}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="uniqueOrderId">
                <strong>{order.orderId}</strong>
              </div>
              <div className="orderTotal">₹{order.total}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="mr-2">
                <div className="orderTimerWrapper">{order.statusDetails}</div>
              </div>
              <div className={`listSingleOrderStatus ${order.statusClass}`}>
                <span>{order.status}</span>
              </div>
            </div>
            <hr />
            <div className="orderList-orderItemsPreview">
              <span className="mr-2 text-muted">
                <span className="mr-1">{order.itemQuantity}x</span>
                {order.itemName}
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
      ))}
    </div>

  </div>
</div>




   </div>
   </>
  )
}

export default pages