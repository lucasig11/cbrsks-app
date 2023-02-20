import { Navigate, useLoaderData, useLocation } from 'react-router-dom'

const RequiredAuth = ({ children }) => {
  const user = useLoaderData()
  const location = useLocation()

  if (!user.authorized) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  if (user.authorized && !user.isGuild) {
    return <Navigate to="/guild" state={{ from: location }} replace />
  }

  return children

} 

export default RequiredAuth