import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const test = () => {
    console.log("test")
  }

  return (
      <header style={{backgroundColor: 'white', height: '100%'}}>

        <nav className='d-flex flex-column gap-4 h-100 text-center bg-light '>
            <NavLink className='text-white bg-dark rounded py-2 mb-auto'>
              <i className="fa-regular fa-moon h5"></i><br/>
              {/* <i className="fa-regular fa-sun h5"></i> */}
            </NavLink >
            <div className='bg-dark text-white rounded'>
            <NavLink to="/">
              <div className='rounded pt-3'>
                <div> 
                  <i className="fa-solid fa-address-card h5"></i>
                </div>
                <p className='small'>ABOUT</p>
              </div>
            </NavLink>
            <hr/>
            <NavLink to="/projects">
              <div className='rounded pt-2'>
                <div>
                <i className="fa-solid fa-briefcase h5"></i>
                </div>
                <p className='small'>PROJECTS</p>
              </div>
            </NavLink>

            <hr/>
            <NavLink to="/resume">
              <div className='rounded pt-2'>
                <div>
                <i className="fa-regular fa-file h5"></i>
                </div>
                <p className='small'>RESUME</p>
              </div>
            </NavLink>
          </div>
        </nav>

      </header>
    )
  }
  
  
  export default Header
