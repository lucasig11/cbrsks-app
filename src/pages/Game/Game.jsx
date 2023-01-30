import {Unity} from 'react-unity-webgl'
import FullscreenButton from '../../components/FullscreenButton'
import S from './Game.styles'

const Game = ({unityProvider, goFullscreen}) => (
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

    <FullscreenButton onClick={goFullscreen}>Fullscreen</FullscreenButton>
  </S.Game>
)

export default Game