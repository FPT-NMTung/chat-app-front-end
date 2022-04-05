import classes from './Navigation.module.css'
import {Link} from 'react-router-dom'

import logo from '../../../images/logo.png'
import chatIconDeac from '../../../images/chat-icon-deac.png'
import chatIconAc from '../../../images/chat-icon-ac.png'
import settingIconDeac from '../../../images/setting-icon-deac.png'
import settingIconAc from '../../../images/setting-icon-ac.png'

const Navigation = () => {
  return (
    <div className={classes.main}>
      <div>
        <img width={40} src={logo} alt="logo"/>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>
                <img width={22} src={chatIconAc} alt="chatIcon"/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <img width={40} src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Navigation