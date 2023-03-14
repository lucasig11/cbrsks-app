import useSelect from "./useSelect"
import Select from "./Select"

export default ({options}) => {
  const {active, handleClick, clickOption, activeOption, handleBlur, scrollRef} = useSelect(options)

  return <Select 
            options={options} 
            handleClick={handleClick} 
            active={active}
            activeOption={activeOption}
            clickOption={clickOption}
            handleBlur={handleBlur}
            scrollRef={scrollRef}
          />
}