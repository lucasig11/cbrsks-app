import auth from '../../services/auth.service'
import user from '../../services/user.service'

const loaderRequireAuth = async () => {
  const authorized = await auth.refreshToken()
  const isGuild = await user.checkOnGuild()

  return {
    authorized,
    isGuild
  }
}

export default loaderRequireAuth