import React from 'react'

const About = () => {
  return (
    <div className='about container'>
      <h1>About Me</h1>
      <hr/>
    <p>
    Hello! I'm Christian Jhegg Fermilan. Full-Stack Programming 
    Enthusiast from the Philippines, I built several web apps with 
    the Django framework in Python, and I'm currently learning MERN Stack. 
    I'm working and focusing on my goal every day.
    </p>
    <hr/>
    <div className='row'>
      <div className='col-6'>
        <p>Age: 23 years old</p>
      </div>
      <div className='col-6'>
        <p>Address: 8400 Surigao City, Ph</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-6'>
        <p>Employment: Intern</p>
      </div>
      <div className='col-6'>
        <p>Company: GROUPXS Solutions GmbH</p>
      </div>
    </div>

    </div>
  )
}

export default About