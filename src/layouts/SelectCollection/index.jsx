import SelectCollection from './SelectCollection'
import SelectCollectionContext from './SelectCollectionContext/SelectCollectionContext'
import useSelectCollection from './useSelectCollection'

export default () => {
  const {collections, collectionSelected, setCollectionContext, saveCollection, active} = useSelectCollection()

  return (
    <SelectCollectionContext.Provider value={{collectionSelected, setCollectionContext}}>
      <SelectCollection  active={active} collections={collections} saveCollection={saveCollection} />
    </SelectCollectionContext.Provider>
  )
}