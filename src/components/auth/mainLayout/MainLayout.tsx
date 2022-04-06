import Navigation from '../navigation/Navigation'
import Chat from '../chat/Chat'
import {Outlet} from 'react-router-dom'

import classes from './MainLayout.module.css'

const MainLayout = () => {
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