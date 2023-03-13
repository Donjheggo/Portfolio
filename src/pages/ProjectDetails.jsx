import React, {Suspense} from 'react'
import { Link, useLocation, defer, Await, useLoaderData } from 'react-router-dom'
import {getProjectDetails} from "../api/firebase"
import back from "/images/back.svg"

export const projectDetailLoader = ({params}) => {
  return defer({projects: getProjectDetails(params.id)})
}

const ProjectDetails = () => {
  const loader = useLoaderData()
  const location = useLocation()
  const urlParams = location ? location.state.search : null
  const projectFramework = location.state.type || "all"

  const renderProjectDetails = (project) => {
    return (
      <div className='container'>
        <div className='h6'>
          <Link to={`../?${urlParams}`} relative="path" className='d-flex'><img src={back} />&nbsp; Back to {projectFramework} Projects</Link>
        </div>
        <div className='mt-3'>
          <img src={project.image} width="100%" className='rounded'/>
        </div>
        <div className='mt-4'>
          <h2 className="text-primary">{project.name}</h2>
          <h5>{project.framework} Framework</h5>
          <p className='mt-4'>{project.description}</p>
          <Link to={project.url}> {project.url} </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={loader.projects}>
          {renderProjectDetails}
        </Await>
      </Suspense>
    </div>
  )
}

export default ProjectDetails