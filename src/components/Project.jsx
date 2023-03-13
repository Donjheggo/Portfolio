import React from 'react'
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom'

const Project = (props) => {
  return (
        <div className='col-lg-6 col-sm-12'>
          <Link to="/">
            <div>
              <img src={props.image} width="100%" className='rounded'/>
              </div>
              <div className='text-center'>
              <h5>{props.name}</h5>
              <p>{props.framework} Framework</p>
            </div>
          </Link>
        </div>
  )
}

export default Project