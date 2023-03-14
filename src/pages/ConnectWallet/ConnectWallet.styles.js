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

const SkipButton = styled.div`
  width: 38px;
  height: 22px;
  text-align: center;
  font: normal normal bold 17px/22px Rajdhani;
  letter-spacing: 2.18px;
  color: #F65F10;
  text-shadow: 0px 0px 28px #F65F10;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: var(--gap-small);

  :hover {
    cursor: pointer;
  }
`;

export {
  Container,
  SkipButton,
};
