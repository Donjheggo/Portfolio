import React from 'react'
import { NavLink } from 'react-router-dom'
import coverPhoto from "/images/coverphoto.jpg"
import myPhoto from "/images/Me.png"

const Me = () => {
  return (
    <div className='me'>
      <div>
        <img src={coverPhoto} width="100%" className='rounded'/>
      </div>
      <div className="text-center">
        <img src={myPhoto} className="w-50 my-photo"/>
      </div>
      <div className='text-center'>
        <h4 className='mt-3'>Christian Jhegg Fermilan</h4>
        <h5 className='text-primary'>Full Stack Web Developer</h5>
        <nav className='d-flex gap-2 justify-content-center'>
          <NavLink to="">
            <i className="fa-brands fa-github"></i>
          </NavLink>
          <NavLink to="">
            <i className="fa-brands fa-linkedin"></i>
          </NavLink>
          <NavLink to="">
            <i className="fa-brands fa-facebook"></i>
          </NavLink>
        </nav>
      </div>
      <hr className='mt-5'/>
      <div className="row justify-content-between bottom" style={{marginTop: 'auto'}}>
        <div className='col-6 pb-3 text-center' style={{borderRight: 'solid .1rem'}}>
          <NavLink> Download CV </NavLink>
        </div>
        <div className='col-6 pb-3 text-center'>
          <NavLink>My Linkedin</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Me;