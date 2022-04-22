import classes from './RightChat.module.css'

const DUMMY_DATA = [
  'hôm nào cũng đc',
  'a đang trong thời gian nghỉ',
  'tuỳ e với c Phương',
]

const RightChat = () => {
  return <div className={classes.main}>
    {DUMMY_DATA.map((content, index) => {
      if (index === 0) {
        return <div key={index} className={`${classes.itemChat} ${classes.header}`}>{content}</div>
      } else if (index === DUMMY_DATA.length - 1) {
        return <div key={index} className={`${classes.itemChat} ${classes.footer}`}>{content}</div>
      } else {
        return <div key={index} className={`${classes.itemChat} ${classes.body}`}>{content}</div>
      }
    })}
  </div>
}

export default RightChat