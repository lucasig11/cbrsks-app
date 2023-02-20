import { useEffect, useRef, useState } from 'react'
import useSelectCollectionContext from '../../layouts/SelectCollection/SelectCollectionContext/useSelectCollectionContext'

const useSelect = (options) => {
  const scrollRef = useRef(null)
  const {collectionSelected, setCollectionContext} = useSelectCollectionContext()
  const [active, setActive] = useState(false)
  const [activeOption, setActiveOption] = useState(0)

  useEffect(() => {
    if (active === false) {
      scrollRef.current.scrollTo(0, 0)
    }
  }, [active])

  const handleClick = () => setActive(!active)
  
  const clickOption = (event, index) => {
    setActiveOption(index)
    setCollectionContext(options[index])
  }

  const handleBlur = () => setActive(false)

  return {
    active,
    handleClick,
    activeOption,
    clickOption,
    handleBlur,
    scrollRef
  }
}

export default useSelect