import React from 'react'

const Project = (props) => {
  return (
        <>
            <div>
              <img src={props.image} width="100%" height="300px" className='rounded'/>
              </div>
              <div className='text-center'>
              <h5>{props.name}</h5>
              <p className='fw-light small'>{props.framework} Framework</p>
            </div>
        </>
  )
}

export default Project