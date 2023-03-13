import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header style={{backgroundColor: 'white', height: '100%'}}>
        <nav className='d-flex justify-content-end gap-4 flex-column h-100 text-center'>
          <div className='theme-btn bg-primary text-white p-2 rounded mb-auto'>
              Theme
          </div>
            <NavLink to="/">
            <div className='bg-primary text-white p-2 rounded'>
              About
            </div>
            </NavLink>
            <NavLink to="/skills">
              <div className='bg-primary text-white p-2 rounded'>
              Skills
              </div>
            </NavLink>
            <NavLink to="/projects">
              <div className='bg-primary text-white p-2 rounded'>
              Projects
              </div>
            </NavLink>
            <NavLink to="/links">
              <div className='bg-primary text-white p-2 rounded'>
              Links
              </div>
            </NavLink>
            <NavLink to="/resume">
              <div className='bg-primary text-white p-2 rounded'>
              Resume
              </div>
            </NavLink>
        </nav>
      </header>
  )
}

export default Header