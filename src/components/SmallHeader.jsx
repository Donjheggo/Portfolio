import React from 'react'
import { NavLink } from 'react-router-dom'

const SmallHeader = () => {
  return (
    <header>
        <nav className='d-flex justify-content-between p-3'>
            <div>
                <NavLink>
                  {/* <i className="fa-regular fa-moon h5"></i> */}
                  <i className="fa-regular fa-sun h5"></i>
                </NavLink>
            </div>
            <div>
                <NavLink to="/" className="border-start ps-2">ABOUT</NavLink>
                <NavLink to="/works" className="mx-2 px-2 border-start border-end">WORKS</NavLink>
                <NavLink to="/resume">RESUME</NavLink>
            </div>
        </nav>

    </header>
  )
}

export default SmallHeader