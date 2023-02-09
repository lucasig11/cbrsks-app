import styled from "styled-components";
import { InfoBox } from "../../components/InfoBox/InfoBox.styles";

const EnterGuild = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > ${InfoBox} {
    
  }
`

export default {
  EnterGuild
}