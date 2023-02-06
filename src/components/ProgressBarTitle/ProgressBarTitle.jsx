import S from './ProgressBarTitle.styles'

const calcPorcentage = (completed, total) => {
  if (completed && total) {
    return `${((completed/total)*100).toFixed(2)}%`
  }

  return '..%'
}

const ProgressBarTitle = ({title, completed, total = 100}) => (
  <S.ProgressBarTitle>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Value>{calcPorcentage(completed, total)}</S.Value>
    </S.Content>

    <S.Bar fill={completed/total} />
  </S.ProgressBarTitle>
)

export default ProgressBarTitle