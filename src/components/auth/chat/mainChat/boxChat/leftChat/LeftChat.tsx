import classes from './LeftChat.module.css'

const DUMMY_DATA = [
  'ukee để hỏi',
  't7 e học sáng thôi',
  'dạo này',
  'có làm mấy thứ hay ho',
  'như hôm trc k',
  'coi với',
  'mấy cái đợt tết bý'
]

const LeftChat = () => {
  return <div className={classes.main}>
    <img className={classes.avatar} src="https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg" alt=""/>
    <div className={classes.mainChat}>
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
  </div>
}

export default LeftChat