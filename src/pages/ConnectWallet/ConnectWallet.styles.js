import styled from "styled-components";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { InfoBox } from "../../components/InfoBox/InfoBox.styles";

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > ${Title} {
    margin-top: auto;
    width: 465px;
    margin-bottom: var(--gap-smaller);
  }

  & > ${Text}.subtitle {
    width: 320px;
    margin-bottom: var(--gap-big);
  }

  & > ${InfoBox} {
    margin-top: auto;
    margin-bottom: var(--gap-bigger);
  }
`;

const ConnectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-smaller);
  background-color: #4e44ce;
  padding: 0 var(--gap-bigger);
  font-size: 2rem;
  border-radius: 4rem;
  height: 6rem;
  cursor: pointer;
  transition: all 50ms ease-in-out;
  box-shadow: 0 0 0 var(--color-white-light);
  text-decoration: none;
  color: var(--color-white);
  width: 32rem;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.01);
  }
`;

const SkipButton = styled.div`
  width: 38px;
  height: 22px;
  text-align: center;
  font: normal normal bold 17px/22px Rajdhani;
  letter-spacing: 2.18px;
  color: #f65f10;
  text-shadow: 0px 0px 28px #f65f10;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: var(--gap-small);

  :hover {
    cursor: pointer;
  }
`;

export { Container, ConnectButton, SkipButton };
