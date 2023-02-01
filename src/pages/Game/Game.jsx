import {Unity} from 'react-unity-webgl'
import FullscreenButton from '../../components/FullscreenButton'
import Loading from '../../layouts/Loading'
import Quest from '../../layouts/Quest'
import S from './Game.styles'

const Game = ({unityProvider, goFullscreen, isLoaded, loadingProgression}) => (
  <S.Game>
    <Quest 
      title="Reach 2084 points" 
      completed={50} 
      total={2084} 
      labelAction="Claim first class WL"
    />
    <S.Stage>
      <Loading isLoaded={isLoaded} loadingProgression={loadingProgression} />
      <Unity
        style={{
          width: 1040,
          height: 586
        }}
        unityProvider={unityProvider}
      />
      
      <FullscreenButton onClick={goFullscreen} />
    </S.Stage>

  </S.Game>
)

export default Game