import FactoryOption from './FactoryOption'
import S from './Select.styles'

const Select = ({options, active=false, handleClick, activeOption, clickOption, handleBlur, scrollRef}) => (
  <S.Select
    tabIndex={1}
    amountOptions={options.length} 
    active={active} 
    onClick={handleClick}
    onBlur={handleBlur}
  >
    <S.WrapperFakeSelect>
      <S.Scroll ref={scrollRef}>
        <S.FakeSelect>    
          <FactoryOption options={options} clickOption={clickOption} activeOption={activeOption} />
        </S.FakeSelect>
      </S.Scroll>
    </S.WrapperFakeSelect>
  </S.Select>
)

export default Select