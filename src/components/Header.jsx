import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header style={{backgroundColor: 'white', height: '100%'}}>
        <nav className='d-flex justify-content-end gap-4 flex-column h-100 text-center'>
          <div className='theme-btn bg-primary text-white p-2 rounded mb-auto '>
            <div>
              <i className="fa-regular fa-moon h4"></i><br/>
              {/* <i className="fa-regular fa-sun h4"></i> */}
            </div>
              THEME
          </div>
            <NavLink to="/">
            <div className='bg-primary text-white p-2 rounded '>
              <div>
                <i className="fa-solid fa-address-card h4"></i>
              </div>
              ABOUT
            </div>
            </NavLink>
            <NavLink to="/skills">
              <div className='bg-primary text-white p-2 rounded '>
                <div>
                <i className="fa-solid fa-laptop h4"></i>
                </div>
              SKILLS
              </div>
            </NavLink>
            <NavLink to="/projects">
              <div className='bg-primary text-white p-2 rounded '>
                <div>
                <i className="fa-solid fa-briefcase h4"></i>
                </div>
              PROJECTS
              </div>
            </NavLink>
            <NavLink to="/resume">
              <div className='bg-primary text-white p-2 rounded '>
                <div>
                <i className="fa-regular fa-file h4"></i>
                </div>
              RESUME
              </div>
            </NavLink>
        </nav>
      </header>
  )
}

export default Header