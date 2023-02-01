import S from './Loading.styles'

const Loading = ({isLoaded, loadingProgression}) => (
  <S.Loading isLoaded={isLoaded}>
    <S.Text>Loading_</S.Text>
    <S.Bar loadingProgression={loadingProgression} />
  </S.Loading>
)

export default Loading