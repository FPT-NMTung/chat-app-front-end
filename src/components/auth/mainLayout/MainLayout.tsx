import Navigation from '../navigation/Navigation'
import Content from '../content/Content'

import classes from './MainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={classes.main}>
      <div className={classes.nav}>
        <Navigation/>
      </div>
      <div className={classes.content}>
        <Content/>
      </div>
    </div>
  )
}

export default MainLayout