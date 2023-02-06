import { useEffect, useState } from "react"
import service from "../../services/quest.service"

const useQuest = () => {
  const [quest, setQuest] = useState({
    title:"Loading..", 
    total:0, 
    completed:0, 
    labelAction:"Loading..."
  })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const getActive = async () => {
      try {
        const {labels: {bar: title, button: labelAction}, goal: total} = await service.getActive()

        setActive(true)
        setQuest({title, labelAction, total})
      } catch(error) {
        setActive(false)
      }
    }

    getActive()
  }, [])

  return {
    quest,
    active
  }
}

export default useQuest 