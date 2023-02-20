import {useState, useEffect} from 'react'
import user from '../../services/user.service'

const useSelectCollection = () => {
  const [collections, setCollections] = useState(['Loading...'])
  const [collectionSelected, setCollectionContext] = useState(collections)

  useEffect(() => {
    const getCollections = async () => {
      const {collections: apiCollections} = await user.getUserCollections()
    
      if (apiCollections !== undefined) {
        setCollections(apiCollections)
      }
    }
    getCollections()
  }, [])

  return {
    collections,
    collectionSelected,
    setCollectionContext
  }
}

export default useSelectCollection