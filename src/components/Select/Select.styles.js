import styled, {css} from 'styled-components'

const hasActiveOption = ({active}) => active && css`
  order: -1; 
`

const Option = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  height: var(--base-height);
  padding: 0 var(--gap-small);
  background-color: var(--color-black-sixth);
  transition: background-color 200ms ease-in-out;

  &:hover, &:focus {
    background-color: var(--color-second);
  }

  &[data-active="true"] {
    position: sticky;
    top: 0;
    width: 100%;
  }

  ${hasActiveOption}
`

const FakeSelect = styled.ol`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  background-color: var(--color-black-sixth);
  color: var(--color-white-second);
  width: 100%;
  height: calc(var(--base-height) * var(--amount-options));
  cursor: pointer;
  border-bottom: 0.1rem solid var(--color-white);
  

  &::before {
    content: '';
    position: absolute;
    right: var(--gap-small);
    border: 0.8rem transparent solid;
    border-top-color: var(--color-second);
    transform: translateY(80%);
    opacity: 0;
    transition: opacity 100ms ease-in-out;
  }
`

const Scroll = styled.div`
  position: relative;
  height: calc(var(--base-height) * 5);
`

const WrapperFakeSelect = styled.div`
  width: 100%;
  height: var(--base-height);
  position: absolute;
  overflow: hidden;
  transition: height 100ms ease-in-out;
`

const hasActive = ({active}) => active && css`
  & > ${WrapperFakeSelect} {
    height: calc(var(--base-height) * var(--amount-options));
    transition: none;
  }

  & ${FakeSelect}::before {
    opacity: 0;
  }
`

const amountGreaterThan1 = ({amountOptions}) => amountOptions > 1 && css`
  & ${FakeSelect}::before {
   opacity: 1;
  }
`

const acitveScroll = ({active, amountOptions}) => active && amountOptions > 5 && css`
  & ${Scroll} {
    overflow-y: scroll;
    overflow-x: hidden;
  }
`

export const Select = styled.div`
  --amount-options: ${({amountOptions}) => amountOptions};
  --base-height: 3.8rem;

  position: relative;
  height: var(--base-height);
  width: 300px;

  ${amountGreaterThan1};
  ${hasActive};
  ${acitveScroll};
` 

export default {
  WrapperFakeSelect,
  Scroll,
  FakeSelect,
  Option,
  Select
}