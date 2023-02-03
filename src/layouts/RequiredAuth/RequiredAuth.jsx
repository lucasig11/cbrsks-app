import { Navigate, useLoaderData, useLocation } from 'react-router-dom'

const RequiredAuth = ({ children }) => {
  const discord = useLoaderData()
  const location = useLocation()

  return  discord.authorized ? children : <Navigate to="/" state={{ from: location }} replace />
}

export default RequiredAuth