import React from 'react'
import Project from '../components/Project'
import ProjectsData from "../data/ProjectsData"

const Projects = () => {

  const projectElements = ProjectsData.projects.map(data => <Project key={data.id} title={data.title} image={data.image} framework={data.framework}/>)

  return (
    <div className='projects container'>
      <div className='d-flex justify-content-between'>
        <div>
          <h4>Projects</h4>
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
        {projectElements}
      </div>
    </div>
  )
}

export default Projects