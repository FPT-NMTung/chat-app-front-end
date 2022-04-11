import classes from './ListChat.module.css'
import Information from './information/Information'
import LastChats from './lastChats/LastChats'
import {MouseEvent, useState} from 'react'

import {PropsInterfaceListChat} from '../../../../common/interface'
import SearchIron from '../../../../images/search-icon.png'
import ArrowLeftIcon from '../../../../images/arrow-left-icon.png'

const ListChat = ({list}: PropsInterfaceListChat) => {
  const [isOpenListChat, setIsOpenListChat] = useState(true)

  const handlerClickBack = (event: MouseEvent<HTMLDivElement>) => {
    setIsOpenListChat(!isOpenListChat)
  }

  return <div className={`${classes.main} ${isOpenListChat ? '' : classes.isNotOpen}`}>
    <div className={classes.header}>
      <div onClick={handlerClickBack} className={classes.imageBack}>
        <img className={isOpenListChat ? '' : classes.isRotate} src={ArrowLeftIcon} alt="" height={12} width={12}/>
      </div>
      <p className={classes.title}>Chat</p>
    </div>
    <div className={classes.content}>
      <Information isShow={isOpenListChat}/>
      <div className={classes.inputSearch}>
        <input
          placeholder={'Search'}
          inputMode={'search'}
          className={classes.search}
        />
        <div>
          <button className={classes.buttonSearch} type={'button'}>
            <img width={22} src={SearchIron} alt=""/>
          </button>
        </div>
      </div>
      <LastChats isShow={isOpenListChat} list={list}/>
    </div>
  </div>
}

export default ListChat