import { useLocation, Navigate } from 'react-router-dom'
import commonFunc from '../common/CommonFunc'

const NonRequireAuth = ({children}: {children: JSX.Element}) => {
  const location = useLocation()
  const token = commonFunc.token.getToken()

  if (token) {
    return <Navigate to={'/'} state={{from: location}} replace/>
  }

  return children
}

export default NonRequireAuth