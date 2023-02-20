import { useContext } from "react"
import SelectCollectionContext from "./SelectCollectionContext"

const useSelectCollectionContext = () => {
  const context = useContext(SelectCollectionContext)

  return context
}

export default useSelectCollectionContext