
import Button from '../../components/Button'
import ProgressBarTitle from '../../components/ProgressBarTitle'
import S from './Quest.styles'

const Quest = ({title, total, completed, labelAction}) => (
  <S.Quest>
    <ProgressBarTitle title={title} completed={completed} total={total} />
    <Button>{labelAction}</Button>
  </S.Quest>
)

export default Quest