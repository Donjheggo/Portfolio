
import React from 'react'

const Resume = () => {
  return (
    <div className='resume container'>
      <h4 className='text-primary'>Resumes</h4>
      <hr/>
      <div className='row'>
        <div className='col-12'>
          <h5 className='text-primary'>Objectives</h5>
          <p className='fw-light'>Seeking a challenging career with a progressive organization that provides an opportunity to capitalize on my skills & abilities in the field of web development.</p>
        </div>
        <hr/>
        <div className='col-lg-6 col-sm-12 border-end'>
          <h5 className='text-primary'>Education</h5>
          <p>Course: <span className='fw-light'>Bachelor of Science in Information Technology</span> </p>
          <p>School: <span className='fw-light'>Surigao del Norte State University</span></p>
          <p>School Year: <span className='fw-light'>2019-2023</span></p>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <h5 className='text-primary'>Experience</h5>
          <ul className='fw-light'>
            <li>
              Freelance Web Developement
            </li>
            <li>
              GroupXS Solutions - Intern
            </li>
          </ul>
        </div>
        <hr/>
        <div className='col-12'>
          <h5 className='text-primary'>Skills</h5>
          <ul className='fw-light'>
            <li>Web Application Development </li>
            <li>Intermediate Javascript Skill </li>
            <li>Intermediate Python Skill </li>
            <li>UI/UX Design</li>
            <li>Photo/Video Editing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume