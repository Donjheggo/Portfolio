
import React from 'react'

const Resume = () => {
  return (
    <div className='resume container'>
      <h4 className='text-primary'>Resume</h4>
      <hr/>
      <div className='row'>
        <div className='col-12'>
          <h5 className='text-primary'>Objectives</h5>
          <p>Seeking a challenging career with a progressive organization that provides an opportunity to capitalize on my skills & abilities in the field of web development.</p>
        </div>
        <hr/>
        <div className='col-lg-6 col-sm-12 border-end'>
          <h5 className='text-primary'>Education</h5>
          <p>Course: Bachelor of Science in Information Technology</p>
          <p>School: Surigao del Norte State University</p>
          <p>School Year: 2019-2023</p>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <h5 className='text-primary'>Experience</h5>
          <ul>
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
          <ul>
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