import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import MainLayout from "./components/MainLayout"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App