import classes from './LastChats.module.css'
import {Fragment, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import AddIcon from '../../../../../images/add-icon.png'
import ThreeDotIcon from '../../../../../images/three-dot-icon.png'
import ItemShortChat from './shortChat/ItemShortChat'
import {PropsInterfaceListChat} from '../../../../../common/interface'

const LastChats = ({list, isShow} : PropsInterfaceListChat) => {
  const navigate = useNavigate()

  return <Fragment>
    <div className={classes.lastChat}>
      <p className={classes.title}>Last chats</p>
      <div className={classes.groupButton}>
        <button className={classes.buttonAdd}>
          <img width={24} src={AddIcon} alt="AddIcon"/>
        </button>
        <button className={classes.buttonOption}>
          <img width={20} src={ThreeDotIcon} alt="ThreeDotIcon"/>
        </button>
      </div>
    </div>
    <div className={classes.list}>
      {list.map((element) => {
        return <ItemShortChat key={element.id} {...element}/>
      })}
    </div>
  </Fragment>
}

export default LastChats