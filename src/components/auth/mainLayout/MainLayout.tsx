import Chat from '../chat/Chat'
import {Outlet, useMatch, Navigate} from 'react-router-dom'

import classes from './MainLayout.module.css'
import Navigation from '../navigation/Navigation'

const MainLayout = () => {

  const isHomeScreen = useMatch('/')
  if (isHomeScreen) {
    return <Navigate to="/chat"/>
  }

  return (
    <div className={classes.main}>
      <div className={classes.nav}>
        <Navigation/>
      </div>
      <div className={classes.content}>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout