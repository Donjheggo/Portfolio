import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import MainLayout from "./components/MainLayout"

import About from "./pages/About"
import Projects, { projectsLoader } from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import Resume from "./pages/Resume"
import NotFound from "./pages/NotFound"

import "./server/server"


const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/projects' element={<Projects/>} loader={projectsLoader} errorElement={<h1>There was an error from the server</h1>} />
      <Route path='/project/:id' element={<ProjectDetails/>} errorElement={<h1>There was an error from the server</h1>} />
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App