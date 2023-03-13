import React from 'react'

const Skills = () => {
  return (
    <div className='skills container'>
      <h1>Skills</h1>
      <hr/>
      <div className='row'>
        <div className='col-6'>
            <h3>Front-End</h3>
            <p>
            Modern and mobile-ready website that will help you reach all of your marketing.
            </p>
        </div>
        <div className='col-6'>
            <h3>Back-End</h3>
            <p>
            Back-end with a NoSQL DB and API written in a standard express router or tRPC.
            </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
            <h3>Databases</h3>
            <ul>
              <li>SQLite</li>
              <li>MongoDB [currently learning]</li>
              <li>Postgres [currently learning]</li>
            </ul>
        </div>
        <div className='col-6'>
          <h3>Tools</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>CLI</li>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Skills