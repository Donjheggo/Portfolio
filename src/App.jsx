import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import MainLayout from "./components/MainLayout"

import About from "./pages/About"
import Projects, { projectsLoader } from "./pages/Projects"
import ProjectDetails, { projectDetailLoader } from "./pages/ProjectDetails"
import Resume from "./pages/Resume"
import NotFound from "./pages/NotFound"

import ParticlesBG from './components/ParticlesBG'


const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/works' element={<Projects/>} loader={projectsLoader} errorElement={<h1>There was an error from the server</h1>} />
      <Route path='/works/:id' element={<ProjectDetails/>} loader={projectDetailLoader} errorElement={<h1>There was an error from the server</h1>} />
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
    <div>
      <ParticlesBG/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App