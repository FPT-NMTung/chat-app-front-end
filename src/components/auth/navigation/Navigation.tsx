import classes from './Navigation.module.css'

import logo from '../../../images/logo.png'
import chatIconDeac from '../../../images/chat-icon-deac.png'
import chatIconAc from '../../../images/chat-icon-ac.png'
import settingIconDeac from '../../../images/setting-icon-deac.png'
import settingIconAc from '../../../images/setting-icon-ac.png'
import NavigationItem from './NavigationItem'
import {ElementMenu} from '../../../common/interface'

const listMenu: ElementMenu[] = [
  {
    id: 1,
    title: 'Chat',
    url: '/',
    iconDe: chatIconDeac,
    iconAc: chatIconAc
  },
  {
    id: 2,
    title: 'Setting',
    url: '/setting',
    iconDe: settingIconDeac,
    iconAc: settingIconAc
  }
]

const Navigation = () => {

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <img width={30} src={logo} alt="logo"/>
      </div>
      <nav className={classes.nav}>
        <ul>
          {listMenu.map((element) => (
            <NavigationItem
              key={element.id}
              element={element}
            />
          ))}
        </ul>
      </nav>
      <div className={classes.logo}>
        <img width={30} src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Navigation