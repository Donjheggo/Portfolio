import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SmallHeader from "./SmallHeader"
import Me from "./Me"





const MainLayout = () => {

  
  let [lightMode, setLightMode] = React.useState(false)
  
  let bgColor = lightMode ? "bg-light" : "bg-dark"
  let txtColor = lightMode ? "text-dark" : "text-white"
  let themeIcon = lightMode ? "fa-moon" : "fa-sun"

  const toggleTheme = () => {
    setLightMode(prev => !prev)
    console.log(lightMode)

  
  }
  

  return (
    <div>
      <div className='container-fluid main-layout'>
        <div className='row justify-content-center align-self-center w-100'>
            
            {/*//////  LARGE SCREEN ////// */}
            <div className='col-xl-1 col-sm-12 large-header'>
              <Header toggleTheme={toggleTheme} icon={themeIcon} txtColor={txtColor} bgColor={bgColor} />
            </div>
            {/*//////  END ////// */}

            
            {/*//////  FOR SMALL SCREEN ////// */}
            <div className={`${bgColor} ${txtColor} col-12  shadow-lg large-screen-hide`}>
              <SmallHeader toggleTheme={toggleTheme} icon={themeIcon} txtColor={txtColor} bgColor={bgColor}/>
            </div>
            {/*//////  END ////// */}


            <div className={`${bgColor} ${txtColor} large-screen-rounded col-xl-4 col-sm-12 p-0 small-screen-hide`}>
              <Me/>
            </div>


            <div style={{height: '45rem'}} className={`${bgColor} ${txtColor} position-relative responsive-outlet scrollbar large-screen-rounded  mx-1 col-xl-6 col-sm-12 p-4`}>
              <Outlet/>
            </div>


            {/*//////  SMALL SCREEN ////// */}
            <div className={`${bgColor} ${txtColor} large-screen-hide col-xl-4 col-sm-12 p-0`}>
              <Me/>
            </div>
            {/*//////  END  ////// */}

        </div>
      </div>
    </div>
  )
}

export default MainLayout
