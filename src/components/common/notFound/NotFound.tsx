import {useLocation, useNavigate} from 'react-router-dom'
import classes from './NotFound.module.css'
import Button from '../button/Button'

const NotFound = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handlerButtonClick = () => {
    navigate('/')
  }

  return (
    <div className={classes.layout}>
      <div className={classes.main}>
        <h1 className={classes.title}>404</h1>
        <h2 className={classes.subTitle}>Page not found</h2>
        <p>The requested URL <span className={classes.url}>{location.pathname}</span> was not found on this server</p>
      </div>
      <div className={classes.button}>
        <Button
          color={'primary'}
          size={'medium'}
          text={'Back to home'}
          onClick={handlerButtonClick}
        />
      </div>
    </div>
  )
}

export default NotFound
