import Output from "./Output";
import useOutput from "./useOutput";

export default ({children, copy=false}) => {
  const {handleClick, showTooltip} = useOutput('.btn')

  return <Output 
            showTooltip={showTooltip}
            handleClick={handleClick}
            children={children}
            copy={copy}
          />
}
