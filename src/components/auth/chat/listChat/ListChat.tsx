import classes from './ListChat.module.css'
import Information from './information/Information'

import SearchIron from '../../../../images/search-icon.png'
import LastChats from './lastChats/LastChats'

const ListChat = () => {
  return <div className={classes.main}>
    <div className={classes.header}>

    </div>
    <div className={classes.content}>
      <Information/>
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
      <LastChats/>
    </div>
  </div>
}

export default ListChat