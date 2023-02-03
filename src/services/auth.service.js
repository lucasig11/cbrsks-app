const auth = {
  refreshToken: async () => {
    const url = '/api/auth/discord/refresh'

    try {
      const response = await fetch(url)
      const {status} = await response.json()

      return status === 200
    } catch(error) {
      return false
    }
  }
}

export default auth