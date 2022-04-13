import classes from './Chat.module.css'
import ListChat from './listChat/ListChat'
import MainChat from './mainChat/MainChat'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

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

const Chat = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (dummyList.length > 0) {
      navigate('/chat/' + dummyList[0].id)
    }
  }, [])

  return <div className={classes.main}>
    <ListChat list={dummyList}/>
    <MainChat/>
  </div>
}

export default Chat