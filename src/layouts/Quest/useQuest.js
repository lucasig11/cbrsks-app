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
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const getActive = async () => {
      try {
        const questApi = await service.getActive()
        const completed = await service.getPoints()
        const {comingSoonDate = false} = questApi

        if (comingSoonDate) {
          const {labels, startDate} = questApi
          setQuest({title: labels.bar, labelAction: labels.button, comingSoonDate, startDate, countdown: '--:--:--'})
        } else {
          const {labels: {bar: title, button: labelAction}, goal: total} = questApi
          setQuest({title, labelAction, total, completed})
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
      }, 1000)

      return () => clearTimeout(time)
    }
  }, [quest])

  const handleClick = async () => {
    try {
      setQuest((old) => ({...old, labelAction: 'Processing...'}))
      await service.prize()
      setOpenModal(true)
    } catch(error) {
      const {labels: {button: labelAction}} = await service.getActive()
      setQuest((old) => ({...old, labelAction: labelAction}))
      return false
    } finally {
      setQuest((old) => ({...old, labelAction: `You're Skylisted!`}))
    }
  }

  const closeModal = () => setOpenModal(false)

  return {
    quest,
    active,
    handleClick,
    openModal,
    closeModal
  }
}

export default useQuest 