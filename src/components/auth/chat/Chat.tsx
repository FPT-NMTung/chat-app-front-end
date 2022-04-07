import classes from './Chat.module.css'
import ListChat from './listChat/ListChat'
import MainChat from './mainChat/MainChat'

const Chat = () => {
  return <div className={classes.main}>
    <ListChat/>
    <MainChat/>
  </div>
}

export default Chat