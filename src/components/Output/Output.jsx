import Icons from "../Icons"
import S from './Output.styles'

const Output = ({children, copy=false, handleClick, showTooltip=false}) =>(
  <S.Output>
    {children}
    {copy && 
    <S.WrapperIcon>
      <Icons.Copy 
        onClick={handleClick} 
        className="btn" 
        data-clipboard-text={children} 
        alt="Copy to clipboard" 
      />
      <S.Tooltip active={showTooltip}>
        Copy to clipboard
      </S.Tooltip>
    </S.WrapperIcon>
    }

  </S.Output>
)


export default Output