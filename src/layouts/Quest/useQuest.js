import { useEffect, useState } from "react"
import service from "../../services/quest.service"
import calcTimeLeft from "../../utils/calcTimeLeft"

const useQuest = () => {
  const [quest, setQuest] = useState({
    title:"Loading..", 
    total:0, 
    completed:0, 
    labelAction:"Loading...",
    startDate: 0
  })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const getActive = async () => {
      try {
        const questApi = await service.getActive()
        const {comingSoonDate = false} = questApi

        if (comingSoonDate) {
          const {labels, startDate} = questApi
          setQuest({title: labels.bar, labelAction: labels.button, comingSoonDate, startDate, countdown: '--:--:--'})
        } else {
          const {labels: {bar: title, button: labelAction}, goal: total} = questApi
          setQuest({title, labelAction, total})
        }
        setActive(true)
      } catch(error) {
        setActive(false)
      }
    }

    getActive()
  }, [])

  useEffect(() => {
    
    if (!!quest.comingSoonDate) {
      
      const time = setTimeout(() => {
        const countdown = calcTimeLeft(quest.startDate)
        setQuest({...quest, countdown})
      },)

      return () => clearTimeout(time)
    }
  }, [quest])

  return {
    quest,
    active
  }
}

export default useQuest 