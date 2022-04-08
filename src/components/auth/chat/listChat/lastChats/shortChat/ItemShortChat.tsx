import classes from './ItemShortChat.module.css'
import {Link, useMatch} from 'react-router-dom'

const ItemShortChat = (props: any) => {

  const isMatch = useMatch('/chat/' + props.id)

  return <Link to={'/chat/' + props.id} className={`${classes.main} ${isMatch ? classes.match : ''}`}>
    <img className={classes.image}
         src="https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg"
         alt="avatar"/>
    <div className={classes.information}>
      <div className={classes.lineName}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.time}>30 month</p>
      </div>
      <p className={classes.status}>Typing ...</p>
    </div>
  </Link>
}

export default ItemShortChat