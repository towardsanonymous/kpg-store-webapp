"use client"
import React from 'react'
import MenuCategory from '../components/MenuItem';
import EditItemdrawer from '../components/EditItemdrawer';


function page() {
  const menuData = [
    {
      categoryName: 'pizza',
      items: [
        { name: 'VEG MANCH NOODLES WITH GRAVY VEG MANCHU', price: 2.0, imageSrc: 'https://titozz.in/assets/img/items/16880536318LyAOXADAL.jpg' },
        { name: 'NOODLES HALF', price: 20.0 },
        { name: 'tes6', price: 0.0, imageSrc: 'https://titozz.in/assets/img/items/1630966465Tm2sYNJOyP.jpg' },
        { name: 'tee', price: 0.0 },
      ],
    },
    // Add more categories as needed
  ];



  return (
    <>
      <div>
        <div class="pageTitle bg-primary-gradient">Menu Manager</div>
        <div className='pageContents'>
          <div class="orders-tab-content">
            <div className="liveOrderList">
              <a href="/search-orders">
                <div className="mock-search-block mb-3 mock-search-block--sticky">
                  <div className="px-15 d-flex justify-content-between searchMockInput">
                    <div>
                      <span>Search For item ...</span>
                    </div>
                    <div>
                      <i className="si si-magnifier"></i>
                    </div>
                  </div>
                </div>
              </a>

              <div className='mt-2 mb-5'>
              <div>
      {menuData.map((category, index) => (
        <MenuCategory key={index} {...category} />
      ))}
    </div>


              </div>
              <EditItemdrawer/>



            </div>

          </div>
        </div>


      </div>


    </>
  )
}

export default page