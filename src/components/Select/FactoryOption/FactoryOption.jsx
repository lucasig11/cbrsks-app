import {useEffect} from 'react'
import S from '../Select.styles'

const FactoryOption = ({options, clickOption, activeOption}) => ( 
  options.map((option, index) => {
    return (
      <S.Option data-active={index === activeOption} active={index === activeOption} onClick={(event) => clickOption(event, index)} key={option}>
        {option}
      </S.Option> 
    )
  })
)

export default FactoryOption