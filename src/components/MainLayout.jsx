import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SmallHeader from "./SmallHeader"
import Me from "./Me"


const MainLayout = () => {
  return (
    <div className='container main-layout'>
      <div className='row justify-content-center align-self-center'>
          
          {/*//////  LARGE SCREEN ////// */}
          
          <div className='col-xl-1 col-sm-12'>
            <Header/>
          </div>

          {/*//////  END ////// */}

          
          {/*//////  FOR SMALL SCREEN ////// */}
          <div className='col-12 bg-dark text-warning shadow-lg large-screen-hide'>
            <SmallHeader/>
          </div>
          {/*//////  END ////// */}


          <div className='bg-dark text-white large-screen-rounded col-xl-4 col-sm-12 p-0 small-screen-hide'>
            <Me/>
          </div>


          <div className='bg-dark responsive-outlet scrollbar text-white large-screen-rounded  mx-1 col-xl-6 col-sm-12 p-4'>
            <Outlet/>
          </div>


          {/*//////  SMALL SCREEN ////// */}
          <div className='bg-dark text-white large-screen-hide col-xl-4 col-sm-12 p-0'>
            <Me/>
          </div>
          {/*//////  END  ////// */}

      </div>
    </div>
  )
}

export default MainLayout

// style={{overflowY: 'scroll', maxHeight: '40rem'}}