import auth from '../../services/auth.service'
import user from '../../services/user.service'

const loaderRequireAuth = async () => {
  const isGuild = await user.checkOnGuild()
  const authorized = await auth.refreshToken()

  return {
    authorized,
    isGuild
  }
}

export default loaderRequireAuth