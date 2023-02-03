import auth from '../../services/auth.service'

const loaderRequireAuth = async () => {
  const authorized = await auth.refreshToken()

  return {
    authorized
  }
}

export default loaderRequireAuth