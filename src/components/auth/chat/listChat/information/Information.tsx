import classes from './Information.module.css'
import {ChangeEvent, useState} from 'react'

enum statusEnum {
  'available',
  'busy',
  'offline'
}

const Information = () => {
  const [status, setStatus] = useState(statusEnum.offline)

  const handlerStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (Number.parseInt(event.target.value) === statusEnum.available) {
      setStatus(0)
    } else if (Number.parseInt(event.target.value) === statusEnum.busy) {
      setStatus(1)
    } else if (Number.parseInt(event.target.value) === statusEnum.offline) {
      setStatus(2)
    }
  }

  return <div className={`${classes.information}`}>
    <div>
      <img className={classes.image} width={100}
           src="https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg"
           alt="avatar"/>
      <div
        className={`${classes.dot} ${status === statusEnum.available ? classes.available : (status === statusEnum.busy ? classes.busy : classes.offline)}`}/>
    </div>
    <p className={classes.name}>Nguyen Manh Tung</p>
    <select value={status} onChange={handlerStatusChange}
            className={`${classes.select} ${status === statusEnum.available ? classes.available : (status === statusEnum.busy ? classes.busy : classes.offline)}`}>
      <option className={classes.option} value={statusEnum.available}>available</option>
      <option className={classes.option} value={statusEnum.busy}>busy</option>
      <option className={classes.option} value={statusEnum.offline}>offline</option>
    </select>
  </div>
}

export default Information