import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function page() {
    return (
        <>
            <div className="pageTitle bg-primary-gradient">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <ArrowBackIcon />
                    </div>
                    <div>View Order</div>
                    <div className="invisible">
                        <ArrowBackIcon />
                    </div>
                </div>
            </div>
            <div className='pageContents'>
                <div>
                    <div className="bg-white p-3" style={{ marginTop: '-1.4rem' }}>
                        <div className="text-center singleOrderRestaurantName">test store</div>
                        <div className="text-center singleOrderUniqueOrderId">OD-09-27-TR7Q-ZRGDWQBLV</div>
                        <div className="text-center singleOrderOrderTime">
                            <time dateTime="1695822641000">27/09/2023 07:20pm</time>
                        </div>
                        <div className="text-center singleOrderDeliveryType">
                            <span>Delivery Order</span>
                        </div>
                    </div>
                    <div className="custom-card mx-2 mt-3 text-center singleOrderOrderStatus false">
                        <span>Order Placed</span>
                    </div>
                    <div className="custom-card mx-2 mt-3 bg-white position-relative singleOrderCustomerDetails">
                        <div className="p-3">
                            <p className="fw-bold mb-2">Customer Details</p>
                            <p className="mb-1">Name: sundaram</p>
                        </div>
                    </div>
                    <div className="custom-card mx-2 mt-3 bg-white position-relative">
                        <div className="p-3">
                            <p className="fw-bold mb-3">Order Items</p>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span className="order-item-quantity">1x</span>
                                </div>
                                <div style={{ maxWidth: '200px', minWidth: '200px' }}>
                                    <strong>Veg Paneer Rice</strong>
                                </div>
                                <div className="cart-item-price">₹50</div>
                            </div>
                            <div className="items-addons-block"></div>
                            <hr />
                        </div>
                    </div>

                    <div className="custom-card mx-2 mt-3 bg-white position-relative p-3">
                        <div className="d-flex justify-content-between mb-1">
                            <div>Subtotal</div>
                            <div>₹50</div>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                            <div>Delivery Charge</div>
                            <div>₹24.00</div>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                            <div>Tax</div>
                            <div>₹0.00</div>
                        </div>
                    </div>

                    <div className="custom-card mx-2 mt-3 bg-white position-relative mb-5">
                        <div className="d-flex justify-content-between p-3">
                            <div className="font-w700">Total</div>
                            <div className="font-w700">₹76</div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mb-100 mt-5" style={{marginBottom:'100px'}}>
                        <button className="btn btn-lg singleOrderCancelBtn position-relative ">
                            Cancel Order
                        
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default page