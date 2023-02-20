import SelectCollection from './SelectCollection'
import SelectCollectionContext from './SelectCollectionContext/SelectCollectionContext'
import useSelectCollection from './useSelectCollection'

export default () => {
  const {collections, collectionSelected, setCollectionContext} = useSelectCollection()

  return (
    <SelectCollectionContext.Provider value={{collectionSelected, setCollectionContext}}>
      <SelectCollection collections={collections} />
    </SelectCollectionContext.Provider>
  )
}