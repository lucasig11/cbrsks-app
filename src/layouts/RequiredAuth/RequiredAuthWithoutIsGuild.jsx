import { Navigate, useLoaderData, useLocation } from 'react-router-dom'

const RequiredAuthWithoutIsGuild = ({ children }) => {
  const user = useLoaderData()
  const location = useLocation()

  return user.authorized 
      ? children 
      : <Navigate to="/" state={{ from: location }} replace />
}

export default RequiredAuthWithoutIsGuild
