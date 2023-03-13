import React from 'react'

const About = () => {
  return (
    <div className='about container'>
      <h4>About</h4>
      <hr/>
      <p className="text-justify">
        Hello! I'm Christian Jhegg Fermilan. Full-Stack Programming 
        Enthusiast from the Philippines, I built several web apps with 
        the Django framework in Python, and I'm currently learning MERN Stack. 
        I'm working and focusing on my goal every day.
      </p>
      <div className='row'>
        <div className='col-6'>
          <p>Age:  
              23 years old
          </p>
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

      <hr/>
      <div className='skills'>
      <h4>Skills</h4>
        <div className='row'>
          <div className='col-6 p-3 border-end border-bottom'>
              <h5>Front-End</h5>
              <p>
              Modern and mobile-ready website that will help you reach all of your marketing.
              </p>
          </div>
          <div className='col-6 p-3 border-bottom'>
              <h5>Back-End</h5>
              <p>
              Back-end with a NoSQL DB and API written in a standard express router or tRPC.
              </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 p-3 border-end'>
              <h5>Databases</h5>
              <ul>
                <li>SQLite</li>
                <li>MongoDB [currently learning]</li>
                <li>Postgres [currently learning]</li>
              </ul>
          </div>
          <div className='col-6 p-3'>
            <h5>Tools</h5>
            <ul>
              <li>Visual Studio Code</li>
              <li>CLI</li>
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