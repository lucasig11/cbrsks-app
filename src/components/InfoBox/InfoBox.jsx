import {string} from 'prop-types'
import S from './InfoBox.styles'

const InfoBox = ({title, info}) => (
  <S.InfoBox>
    <S.Title>{title}</S.Title>
    <S.Info>{info}</S.Info>
  </S.InfoBox>
)

InfoBox.propTypes = {
  title: string.isRequired,
  info: string.isRequired
}

export default InfoBox