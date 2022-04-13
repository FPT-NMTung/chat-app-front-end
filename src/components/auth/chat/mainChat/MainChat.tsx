import classes from './MainChat.module.css'
import BoxChat from './boxChat/BoxChat'
import DetailChat from './detailChat/DetailChat'

const MainChat = () => {
  return <div className={classes.main}>
    <BoxChat/>
    <DetailChat/>
  </div>
}

export default MainChat