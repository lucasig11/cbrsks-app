import styled from "styled-components";
import Title from "../../components/Title";
import { InfoBox } from "../../components/InfoBox/InfoBox.styles";
import Text from "../../components/Text";
import { Output } from "../../components/Output/Output.styles";
import Action from "../../components/Action";
import Icons from "../../components/Icons";

const FeakForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > ${Text} {
    margin-bottom: var(--gap-big);
  }

  & > ${Output} {
    box-sizing: border-box;
    width: 320px;
    margin-bottom: var(--gap-big);
  }

  & > ${Action} {
    padding-bottom: var(--gap-big);
    margin-bottom: var(--gap-big);
    width: 100%;

    & > ${Icons.Action} {
      height: 1.4em;
      transition: transform 200ms ease-in-out;
    }

    &:hover > ${Icons.Action} {
      transform: scale(1.4);
    }
  }
`;

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
`;

export default {
  EnterGuild,
  FeakForm,
};
