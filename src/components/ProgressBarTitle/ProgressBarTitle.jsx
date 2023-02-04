import S from './ProgressBarTitle.styles'

const ProgressBarTitle = ({title, completed, total = 100}) => (
  <S.ProgressBarTitle>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Value>Feb 07</S.Value>
    </S.Content>

    <S.Bar fill={completed/total} />
  </S.ProgressBarTitle>
)

export default ProgressBarTitle