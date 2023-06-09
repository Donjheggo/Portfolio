import React, {Suspense} from 'react'
import Project from '../components/Project'

import {Link, useSearchParams, useLoaderData, defer, Await} from "react-router-dom"
import { getProjects } from "../api/firebase"

import Loader from "../components/Loader"

export const projectsLoader = () => {
  return defer({projects: getProjects()})
}

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const projectLoader = useLoaderData()
  const filterType = searchParams.get("type")

  const renderProjectsElement = (loadedProjects) => {

    const filteredProjects = filterType ? loadedProjects.filter(project => project.framework === filterType) : loadedProjects

    const projectElements = filteredProjects.map(data => (
      <div className='col-lg-6 col-sm-12' key={data.id}>
          <Link to={data.id} state={{search: searchParams.toString(), type: filterType}}>
            <Project  
              name={data.name}
              framework={data.framework}
              image={data.image} 
            />
          </Link>
      </div>
      )
    )
    return (
      <>
        {projectElements}
      </>
    )
    
  }

  return (
    <div className='projects container-fluid'>
      <div className='d-flex justify-content-between'>
        <div>
          <h4 className='text-warning'>Projects</h4>
        </div>
        <div>
          <button 
          className='btn btn-warning'
          onClick={() => setSearchParams({})}
          >
            All
          </button>
          <button 
          className='btn btn-warning mx-2'
          onClick={() => setSearchParams({type: 'React'})}
          >
            React
          </button>
          <button 
          className='btn btn-warning'
          onClick={() => setSearchParams({type: 'Django'})}
          >
            Django
          </button>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <Suspense fallback={<Loader/>}>
          <Await resolve={projectLoader.projects}>
            {renderProjectsElement}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default Projects