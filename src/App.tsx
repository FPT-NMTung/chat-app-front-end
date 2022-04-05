import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NonRequireAuth from './authentication/NonRequireAuth'
import RequireAuth from './authentication/RequireAuth'
import MainLayout from './components/auth/mainLayout/MainLayout'
import Login from './components/nonAuth/login/Login'
import NotFound from './components/common/notFound/NotFound'
import SignUp from './components/nonAuth/signUp/SignUp'

import classes from './App.module.css'
import Copyright from './components/common/copyright/Copyright'

function App() {
  return (
    <div className={classes.main}>
      <div className={classes.card}>
        <Routes>
          {/*Auth router*/}
          <Route path={'/'}>
            <Route index element={<RequireAuth><MainLayout/></RequireAuth>}/>
          </Route>

          {/*Non-Auth router*/}
          <Route path={'/auth'}>
            <Route path={'/auth/login'} element={<NonRequireAuth><Login/></NonRequireAuth>}/>
            <Route path={'/auth/sign-up'} element={<NonRequireAuth><SignUp/></NonRequireAuth>}/>
          </Route>

          {/*404 page*/}
          <Route path={'*'} element={<NotFound/>}/>
        </Routes>
      </div>
      <Copyright/>
    </div>
  )
}

export default App
