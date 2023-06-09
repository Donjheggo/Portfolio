import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader'

const About = () => {

  const [preloader, setPreloader] = useState(false)

  useEffect( () => {
    setPreloader(true)
    setTimeout(() => {
      setPreloader(false)
    }, 1000) 
  }, [])


  return (
    <div className='about container-fluid'>
      <h4 className='text-warning'>About</h4>
      <hr/>
      {preloader 
      ? <Loader/>
      : <>
      <p className="fw-light" style={{textAlign: 'justify'}}>
      Hello! I'm Christian Jhegg Fermilan. Full-Stack Programming 
      Enthusiast from the Philippines, I built several web apps with 
      the Django framework in Python, and I'm currently learning MERN Stack. 
      I'm working and focusing on my goal every day.
    </p>
    <div className='row'>
      <div className='col-lg-6'>
        <p>Age: &nbsp;  
          <span className='fw-light'>
            23 years old
          </span>
   
        </p>
      </div>
      <div className='col-lg-6'>
        <p>Address: &nbsp;
          <span className='fw-light'>
            8400 Surigao City, Ph
          </span>
        </p>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-6'>
        <p>Employment: &nbsp;
          <span className='fw-light'>
            Intern
          </span>
          </p>
      </div>
      <div className='col-lg-6'>
        <p>Company: &nbsp;
          <span className='fw-light'>
            GROUPXS Solutions GmbH
          </span>
        </p>
      </div>
    </div>

    <hr/>
    <div className='skills'>
    <h4 className='text-warning'>Skills</h4>
      <div className='row'>
        <div className='col-6 p-3 border-end border-bottom'>
          <i className="fa-brands fa-react h1 text-warning"></i>
            <h5>Front-End</h5>
            <p className='fw-light'>
            Modern website that will help you reach all of your marketing.
            </p>
        </div>
        <div className='col-6 p-3 border-bottom'>
            <i className="fa-brands fa-square-js h1 text-warning"></i>
            <h5>Back-End</h5>
            <p className='fw-light'>
            Back-end with a NoSQL DB and API written in a standard ExpressJS.
            </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 p-3 border-end'>
          <i className="fa-solid fa-database h1 text-warning"></i>
            <h5>ORM</h5>
            <ul className='fw-light'>
              <li>SQLite</li>
              <li>MongoDB [currently learning]</li>
              <li>Postgres [currently learning]</li>
            </ul>
        </div>
        <div className='col-6 p-3'>
        <i className="fa-solid fa-code h1 text-warning"></i>
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
    </>}
    </div>
  )
}

export default About