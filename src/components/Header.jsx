import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
 
  return (
      <header style={{backgroundColor: 'white', height: '100%'}} className="small-screen-hide">

        <nav className='ms-auto d-flex flex-column h-100 text-center w-75'>
            <NavLink className='text-white bg-dark rounded py-2 mb-auto'>
              {/* <i className="fa-regular fa-moon h5"></i><br/> */}
              <i className="fa-regular fa-sun h5"></i>
            </NavLink >
            <div className='bg-dark text-white rounded'>
            <NavLink to="/">
              <div className='rounded pt-3'>
                <div> 
                  <i className="fa-solid fa-address-card h5"></i>
                </div>
                <p className='small' style={{fontSize: '12px'}}>ABOUT</p>
              </div>
            </NavLink>
            <hr/>
            <NavLink to="/works">
              <div className='rounded pt-2'>
                <div>
                <i className="fa-solid fa-briefcase h5"></i>
                </div>
                <p className='small' style={{fontSize: '12px'}}>WORKS</p>
              </div>
            </NavLink>

            <hr/>
            <NavLink to="/resume">
              <div className='rounded pt-2'>
                <div>
                <i className="fa-solid fa-file-lines h5"></i>
                </div>
                <p className='small' style={{fontSize: '12px'}}>RESUME</p>
              </div>
            </NavLink>
          </div>
        </nav>

      </header>
    )
  }
  
  
  export default Header
