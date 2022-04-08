import classes from './LastChats.module.css'
import {Fragment, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import AddIcon from '../../../../../images/add-icon.png'
import ThreeDotIcon from '../../../../../images/three-dot-icon.png'
import ItemShortChat from './shortChat/ItemShortChat'

const dummyList = [
  {
    id: 1,
    name: 'Nguyen Van A',
    lastMessage: 'Привет, как дела?',
    time: '12:00',
    unread: true,
    avatar: 'https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg'
  },
  {
    id: 2,
    name: 'Nguyen Van B',
    lastMessage: 'Привет, как дела?',
    time: '12:00',
    unread: false,
    avatar: 'https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg'
  },
  {
    id: 3,
    name: 'Nguyen Van C',
    lastMessage: 'Привет, как дела?',
    time: '12:00',
    unread: false,
    avatar: 'https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg'
  },
  {
    id: 4,
    name: 'Nguyen Van D',
    lastMessage: 'Привет, как дела?',
    time: '12:00',
    unread: false,
    avatar: 'https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg'
  },
  {
    id: 5,
    name: 'Nguyen Van E',
    lastMessage: 'Привет, как дела?',
    time: '12:00',
    unread: false,
    avatar: 'https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg'
  },
  {
    id: 6,
    name: 'Nguyen Van F',
    lastMessage: 'Привет, как дела?',
    time: '12:00',
    unread: false,
    avatar: 'https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg'
  },
  {
    id: 7,
    name: 'Nguyen Van G',
    lastMessage: 'Привет, как дела?',
    time: '12:00',
    unread: false,
    avatar: 'https://res.cloudinary.com/dvuqazqqs/image/upload/v1648107876/t0sp87k11qaewzleayql.jpg'
  },
]

const LastChats = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (dummyList.length !== 0) {
      navigate(`/chat/${dummyList[0].id}`)
    }
  }, [])

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
      {dummyList.map((element) => {
        return <ItemShortChat key={element.id} {...element}/>
      })}
    </div>
  </Fragment>
}

export default LastChats