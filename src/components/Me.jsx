import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'
import coverPhoto from "/images/coverphoto.jpg"
import myPhoto from "/images/Me.png"
import mypic from "/images/mypic.png"
import HackerText from "./HackerText"

const Me = () => {

  return (

      <div className='me d-flex flex-column'>
        <div className='bg-image'>
          {/* <img src={coverPhoto} className='rounded' width="100%" style={{objectFit: 'contain'}}/> */}
        </div>
        <div className="text-center">
          <img src={mypic} className="my-photo"/>
        </div>
        <div className='text-center mt-2'>
          <HackerText text="Christian Jhegg Fermilan" />
            <p className='text-warning mt-3'>
              <span className='highlight-container'>
                <span className='highlight'>
                  Full Stack Web Developer
                </span>
              </span>
            </p>
            <nav className='d-flex gap-2 justify-content-center mt-3'>
              <NavLink to="https://github.com/Donjheggo" target="_blank">
                <i className="fa-brands fa-github"></i>
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/donjheggo/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </NavLink>
              <NavLink to="https://www.facebook.com/Donjheggo/">
                <i className="fa-brands fa-facebook" target="_blank"></i>
              </NavLink>
            </nav>
        </div>

        <div className='my-links'>
          <hr/>
          <div className="d-flex justify-content-between">
            <div className='col-6 text-center'>
              <a href="/cv/CV.pdf"> Download CV &nbsp;<i className="fa-solid fa-cloud-arrow-down"></i></a>
            </div>
            <div className='col-6 border-start text-center'>
              <NavLink target="_blank" to="https://www.linkedin.com/in/donjheggo/"> My Linkedin &nbsp;<i className="fa-brands fa-linkedin"></i></NavLink>
            </div>
          </div>
        </div>
      </div>


  )
}

export default Me;