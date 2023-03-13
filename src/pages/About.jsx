import React from 'react'

const About = () => {
  return (
    <div className='about container'>
      <h4 className='text-primary'>About</h4>
      <hr/>
      <p className="fw-light" style={{textAlign: 'justify'}}>
        Hello! I'm Christian Jhegg Fermilan. Full-Stack Programming 
        Enthusiast from the Philippines, I built several web apps with 
        the Django framework in Python, and I'm currently learning MERN Stack. 
        I'm working and focusing on my goal every day.
      </p>
      <div className='row'>
        <div className='col-6'>
          <p>Age: &nbsp;  
            <span className='fw-light'>
              23 years old
            </span>
     
          </p>
        </div>
        <div className='col-6'>
          <p>Address: &nbsp;
            <span className='fw-light'>
              8400 Surigao City, Ph
            </span>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <p>Employment: &nbsp;
            <span className='fw-light'>
              Intern
            </span>
            </p>
        </div>
        <div className='col-6'>
          <p>Company: &nbsp;
            <span className='fw-light'>
              GROUPXS Solutions GmbH

            </span>
          </p>
        </div>
      </div>

      <hr/>
      <div className='skills'>
      <h4 className='text-primary'>Skills</h4>
        <div className='row'>
          <div className='col-6 p-3 border-end border-bottom'>
              <h5>Front-End</h5>
              <p className='fw-light'>
              Modern website that will help you reach all of your marketing.
              </p>
          </div>
          <div className='col-6 p-3 border-bottom'>
              <h5>Back-End</h5>
              <p className='fw-light'>
              Back-end with a NoSQL DB and API written in a standard ExpressJS.
              </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 p-3 border-end'>
              <h5>Databases</h5>
              <ul className='fw-light'>
                <li>SQLite</li>
                <li>MongoDB [currently learning]</li>
                <li>Postgres [currently learning]</li>
              </ul>
          </div>
          <div className='col-6 p-3'>
            <h5>Tools</h5>
            <ul className='fw-light'>
              <li>Visual Studio Code</li>
              <li>Command Line Interface</li>
              <li>Git</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About