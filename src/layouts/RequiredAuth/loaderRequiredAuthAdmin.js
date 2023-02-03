import auth from '../../services/auth.service'

const loaderRequireAuthAdmin = async () => {
  const authorized = await auth.refreshToken()

  return {
    authorized
  }
}

export default loaderRequireAuthAdmin