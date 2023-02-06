const quest = {
  getActive: async () => {
    const url = '/api/quest/active'

    try {
      const response = await fetch(url)
      const {status, quest: questApi} = await response.json()

      if (status !== 200) throw new Error(`Doesn't have an active quest`)
      console.log(questApi)

      return questApi
    } catch(error) {
      return false
    }
  }
}

export default quest