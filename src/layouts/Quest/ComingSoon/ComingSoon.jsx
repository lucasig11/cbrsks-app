import ProgressBarTitle from '../../../components/ProgressBarTitle'
import Button from '../../../components/Button'
import S from '../Quest.styles'

const ComingSoon = ({countdown, title = 'Loading...', labelAction = 'Loading...`', active = false}) => (
  <S.Quest active={active}>
    <ProgressBarTitle title={title} countdown={countdown} />
    <Button>{labelAction}</Button>
  </S.Quest>
)

export default ComingSoon