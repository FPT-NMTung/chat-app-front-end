import React from 'react'
import {Routes, Route} from 'react-router-dom'

import NonRequireAuth from './authentication/NonRequireAuth'
import RequireAuth from './authentication/RequireAuth'
import MainLayout from './components/auth/mainLayout/MainLayout'
import Login from './components/nonAuth/login/Login'
import NotFound from './components/common/notFound/NotFound'
import SignUp from './components/nonAuth/signUp/SignUp'
import Copyright from './components/common/copyright/Copyright'
import Chat from './components/auth/chat/Chat'
import Setting from './components/auth/setting/Setting'

import classes from './App.module.css'

function App() {
  return (
    <div className={classes.main}>
      <div className={classes.card}>
        <Routes>
          <Route path={'/'} element={<RequireAuth><MainLayout/></RequireAuth>}>
            <Route index element={<Chat/>}/>
            <Route path={'/setting'} element={<Setting/>}/>
          </Route>
          <Route path={'/auth'}>
            <Route path={'/auth/login'} element={<NonRequireAuth><Login/></NonRequireAuth>}/>
            <Route path={'/auth/sign-up'} element={<NonRequireAuth><SignUp/></NonRequireAuth>}/>
          </Route>
          <Route path={'*'} element={<NotFound/>}/>
        </Routes>
      </div>
      <Copyright/>
    </div>
  )
}

export default App
