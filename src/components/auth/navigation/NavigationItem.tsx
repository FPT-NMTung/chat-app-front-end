import {Link, useMatch} from 'react-router-dom'
import classes from './NavigationItem.module.css'
import {ElementMenu} from '../../../common/interface'

const NavigationItem = ({element} : {element: ElementMenu}) => {

  const isMatch = useMatch(element.url + '/*')

  return <li>
    <Link to={element.url}>
      <div className={`${classes.element} ${isMatch ? classes.match : ''}`}>
        <img
          title={element.title}
          className={classes.image}
          width={16}
          src={isMatch ? element.iconAc : element.iconDe}
          alt={element.title}
        />
      </div>
    </Link>
  </li>
}

export default NavigationItem;