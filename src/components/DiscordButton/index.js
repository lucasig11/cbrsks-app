import styled from "styled-components"
import discord from '../../assets/images/icons/discord.svg'

const DiscordButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-smaller);
  background-color: var(--color-first);
  padding: 0 var(--gap-bigger);
  font-size: 2rem;
  border-radius: 4rem;
  height: 6rem;
  cursor: pointer;
  transition: all 50ms ease-in-out;
  box-shadow: 0 0 0 var(--color-white-light);

  &::before {
    content: url(${discord});
    width: 4rem;
  }

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 8px 15px var(--color-white-light);
    transform: scale(1.01)
  }
`

export default DiscordButton