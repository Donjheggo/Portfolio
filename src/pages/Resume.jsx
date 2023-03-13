
import React from 'react'

const Resume = () => {
  return (
    <div className='resume container'>
      <h1>Resume</h1>
      <hr/>
      <div className='row'>
        <div className='col-12'>
          <h3>Objectives</h3>
          <p>Seeking a challenging career with a progressive organization that provides an opportunity to capitalize on my skills & abilities in the field of web development.</p>
        </div>
        <hr/>
        <div className='col-lg-6 col-sm-12'>
          <h3>Education</h3>
          <hr/>
          <p className='text-center'>
          Bachelor of Science in Information Technology 
          </p>
          <p className='text-center'>2019-2023</p>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <h3>Experience</h3>
          <hr/>
          <p className='text-center'>
            GroupXS Solutions
            Intern Position
          </p>
          <p className='text-center'>2023</p>
        </div>
        <hr/>
        <div className='col-12'>
          <h3>Skills</h3>
          <ul>
            <li>Web Application Development </li>
            <li>UI/UX Design</li>
            <li>Photo/Video Editing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume