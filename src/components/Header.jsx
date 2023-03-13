import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header style={{backgroundColor: 'white', height: '100%'}}>
        <nav className='d-flex justify-content-end gap-4 flex-column h-100 text-center'>

            <button className='theme-btn bg-dark text-white rounded py-1 pt-3 mb-auto'>
              <i className="fa-regular fa-moon h5"></i><br/>
              {/* <i className="fa-regular fa-sun h5"></i> */}
            </button>
            <NavLink to="/">
            <div className='bg-dark text-white rounded py-1 pt-3'>
              <div>
                <i className="fa-solid fa-address-card h5"></i>
              </div>
              <p className='small'>ABOUT</p>
            </div>
            </NavLink>
            <NavLink to="/projects">
              <div className='bg-dark text-white rounded py-1 pt-3'>
                <div>
                <i className="fa-solid fa-briefcase h5"></i>
                </div>
                <p className='small'>PROJECTS</p>
              </div>
            </NavLink>
            <NavLink to="/resume">
              <div className='bg-dark text-white rounded py-1 pt-3'>
                <div>
                <i className="fa-regular fa-file h5"></i>
                </div>
                <p className='small'>RESUME</p>
              </div>
            </NavLink>
        </nav>
      </header>
  )
}

export default Header