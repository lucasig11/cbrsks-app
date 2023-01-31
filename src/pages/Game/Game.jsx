import {Unity} from 'react-unity-webgl'
import FullscreenButton from '../../components/FullscreenButton'
import Quest from '../../layouts/Quest'
import S from './Game.styles'

const Game = ({unityProvider, goFullscreen}) => (
  <S.Game>
    <Quest 
      title="Reach 2084 points" 
      completed={50} 
      total={2084} 
      labelAction="Claim first class WL"
    />
    <S.Stage>
      <Unity
        style={{
          width: 1040,
          height: 586
        }}
        unityProvider={unityProvider}
      />
    </S.Stage>

    <FullscreenButton onClick={goFullscreen}>Fullscreen</FullscreenButton>
  </S.Game>
)

export default Game