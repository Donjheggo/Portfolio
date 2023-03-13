import React, {Suspense} from 'react'
import Project from '../components/Project'

import {Link, useSearchParams, useLoaderData, defer, Await} from "react-router-dom"
import { getProjects } from "../api/firebase"

export const projectsLoader = () => {
  return defer({projects: getProjects()})
}

const Projects = () => {
  const projectLoader = useLoaderData()

  const renderProjectsElement = (loadedProjects) => {
    const projectElements = loadedProjects.map(data => (
      <Project 
        key={data.id} 
        name={data.name}
        framework={data.framework}
        image={data.image} 
      />
      )
    )
    return (
      <>
        {projectElements}
      </>
    )
    
  }

  return (
    <div className='projects container'>
      <div className='d-flex justify-content-between'>
        <div>
          <h4 className='text-primary'>Projects</h4>
        </div>
        <div>
          <button className='btn btn-primary'>
            All
          </button>
          <button className='btn btn-primary mx-2'>
            React
          </button>
          <button className='btn btn-primary'>
            Django
          </button>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <Suspense fallback={<h1>Loading projects...</h1>}>
          <Await resolve={projectLoader.projects}>
            {renderProjectsElement}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default Projects