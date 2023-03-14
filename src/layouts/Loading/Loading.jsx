import S from "./Loading.styles";

function Loading({ isLoaded, loadingProgression }) {
  return (
    <S.Loading isLoaded={isLoaded}>
      <S.Content>
        <S.Text>Loading_</S.Text>
        <S.Text>
          {(loadingProgression * 100).toFixed(2)}
          {" "}
          %
        </S.Text>
      </S.Content>
      <S.Bar loadingProgression={loadingProgression} />
    </S.Loading>
  );
}

export default Loading;
