import styled from "styled-components";
import Title from "../../components/Title";
import { InfoBox } from "../../components/InfoBox/InfoBox.styles";
import Text from "../../components/Text";
import Output from "../../components/Output";
import Action from "../../components/Action";

const FeakForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > ${Output} {
    box-sizing: border-box;
    width: 320px;
    margin-bottom: var(--gap-big);
  }

  & > ${Action} {
    align-items: flex-start;
    padding-bottom: var(--gap-big);
    margin-bottom: var(--gap-big);
    width: 100%;
  }
`

const EnterGuild = styled.main`
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
`

export default {
  EnterGuild,
  FeakForm
}