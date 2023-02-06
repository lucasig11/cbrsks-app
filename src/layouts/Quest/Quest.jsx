
import Button from '../../components/Button'
import ProgressBarTitle from '../../components/ProgressBarTitle'
import S from './Quest.styles'

const Quest = ({title="Loading..", total=0, completed=0, labelAction="Loading...", active=false}) => (
  <S.Quest active={active}>
    <ProgressBarTitle title={title} completed={completed} total={total} />
    <Button>{labelAction}</Button>
  </S.Quest>
)

export default Quest