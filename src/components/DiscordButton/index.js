import styled from "styled-components"
import discord from '../../assets/images/icons/discord.svg'

const DiscordButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--gap-smaller);
  background-color: var(--color-first);
  padding: var(--gap-smaller) var(--gap-bigger);
  font-size: 2rem;
  border-radius: 4rem;

  &::before {
    content: url(${discord});
    width: 3.6rem;
  }
`

export default DiscordButton