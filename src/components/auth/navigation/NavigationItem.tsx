import {Link, NavLink, useMatch} from 'react-router-dom'
import classes from './NavigationItem.module.css'
import {ElementMenu} from '../../../common/interface'
import {MouseEvent, useEffect} from 'react'

const NavigationItem = ({element}: { element: ElementMenu }) => {

  const isMatch = useMatch(element.url + '/*')

  const handlerCLickLink = (event: MouseEvent<HTMLAnchorElement>) => {
    const check = element.subUrl.find((subUrl) => subUrl === isMatch?.pattern.path)
    if (check) {
      event.preventDefault()
    }
  }

  return <li>
    <NavLink
      to={element.url}
      className={({isActive}) => {
        return isActive ? classes.match : ''
      }}
      onClick={handlerCLickLink}
    >
      <div className={`${classes.element}`}>
        <img
          title={element.title}
          className={classes.image}
          width={16}
          src={isMatch ? element.iconAc : element.iconDe}
          alt={element.title}
        />
      </div>
    </NavLink>
  </li>
}

export default NavigationItem