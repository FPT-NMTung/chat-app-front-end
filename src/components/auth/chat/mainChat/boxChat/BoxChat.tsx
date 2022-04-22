import classes from './BoxChat.module.css'
import RightChat from './rightChat/RightChat'
import LeftChat from './leftChat/LeftChat'

const BoxChat = () => {
  return <div className={classes.main}>
    <div className={classes.header}>
      <h1 className={classes.title}>Group Chat</h1>
    </div>
    <div className={classes.body}>
      <RightChat/>
      <LeftChat/>
    </div>
    <div className={classes.control}>
      <div className={classes.inputChat}>
        <input className={classes.inputText} type="text" placeholder="Write your message ..."/>
        <button className={classes.buttonSend}>
          <img src="https://img.icons8.com/ios-glyphs/16/ffffff/filled-sent.png" alt={'send icon'}/>
        </button>
      </div>
    </div>
  </div>
}

export default BoxChat