import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NonRequireAuth from './authentication/NonRequireAuth'
import RequireAuth from './authentication/RequireAuth'
import Chat from './components/auth/chat/Chat'
import Login from './components/nonAuth/Login/Login'
import NotFound from './components/handleError/NotFound'

function App() {
  return (
    <div>
      <Routes>
        {/*Auth router*/}
        <Route path={'/'}>
          <Route index element={<RequireAuth><Chat/></RequireAuth>}/>
        </Route>

        {/*Non-Auth router*/}
        <Route path={'/auth'}>
          <Route path={'/auth/login'} element={<NonRequireAuth><Login/></NonRequireAuth>}/>
        </Route>

        {/*404 page*/}
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
