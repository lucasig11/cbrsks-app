import {Unity} from 'react-unity-webgl'
import S from './Game.styles'

const Game = ({unityProvider}) => (
  <S.Game>
    <S.Stage>
      <Unity
        style={{
          width: 896,
          height: 504
        }}
        unityProvider={unityProvider}
      />
    </S.Stage>
  </S.Game>
)

export default Game