import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Me from "./Me"


const MainLayout = () => {
  return (
    <div className='container' style={{display: 'grid', height: '100vh'}}>
      <div className='row justify-content-center align-self-center'>
      <div className='col-xl-1 col-sm-12'>
          <Header/>
        </div>
        <div className='bg-dark text-white rounded col-xl-4 col-sm-12 p-0'>
          <Me/>
        </div>
        <div className='bg-dark responsive-outlet scrollbar text-white rounded mx-1 col-xl-6 col-sm-12 p-4'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainLayout

// style={{overflowY: 'scroll', maxHeight: '40rem'}}