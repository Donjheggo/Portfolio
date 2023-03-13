import React from 'react'

const Project = (props) => {
  return (
    <div className='col-lg-6 col-sm-12'>
        <div>
        <img src={props.image} width="100%" className='rounded'/>
        </div>
        <div className='text-center'>
        <h5>{props.title}</h5>
        <p>{props.framework}</p>
        </div>
  </div>
  )
}

export default Project