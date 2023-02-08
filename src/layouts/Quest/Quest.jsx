
import Button from '../../components/Button'
import ProgressBarTitle from '../../components/ProgressBarTitle'
import ComingSoon from './ComingSoon'
import S from './Quest.styles'

const Quest = ({title="Loading..", total=0, completed=0, labelAction="Loading...", active=false, countdown=false, handleClick, shake=false, loading=false}) => {
  const activeButton = completed >= total
  if (countdown) {
    return (
      <ComingSoon title={title} labelAction={labelAction} countdown={countdown} active={active} />
    )
  }

  return (
    <S.Quest active={active}>
      <ProgressBarTitle title={loading ? 'Loading...' : title} completed={completed} total={total} shake={shake} />
      <Button onClick={activeButton && handleClick} active={activeButton}>{labelAction}</Button>
    </S.Quest>
  )
}

export default Quest