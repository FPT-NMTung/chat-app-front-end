import {useLocation} from 'react-router-dom'

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>{location.pathname}</p>
    </div>
  );
}

export default NotFound;