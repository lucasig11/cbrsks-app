import { Navigate, useLoaderData, useLocation } from 'react-router-dom'

const RequiredAuth = ({ children }) => {
  const user = useLoaderData()
  const location = useLocation()

  return  user.authorized && user.isGuild ? children : <Navigate to="/" state={{ from: location }} replace />
}

export default RequiredAuth