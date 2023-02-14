import {useEffect, useState} from 'react'
import ClipboardJS from "clipboard"

const useOutput = (classToClipboard) => {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    new ClipboardJS(classToClipboard)
  }, [])

  useEffect(() => {
    const time = setTimeout(() => {
      setShowTooltip(false)
    }, 800)

    return () => clearTimeout(time)
  }, [showTooltip])

  const handleClick = () => {
    setShowTooltip(true)
  }

  return {
    handleClick,
    showTooltip
  }
}

export default useOutput