import React, {Suspense} from 'react'
import { Link, useLocation, defer, Await, useLoaderData } from 'react-router-dom'

import {getProjectDetails} from "../api/firebase"

export const projectDetailLoader = ({params}) => {
  return defer({projects: getProjectDetails(params.id)})
}

const ProjectDetails = () => {
  const loader = useLoaderData()

  const renderProjectDetails = (project) => {
    return (
      <div className='container'>
        <div>
          <img src={project.image} width="100%" />
        </div>
        <div>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>{project.framework}</p>
          <Link to={project.url}> Github Link </Link>
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