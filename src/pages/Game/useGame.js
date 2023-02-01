import {useUnityContext} from 'react-unity-webgl'

const {VITE_URL_ASSETS_GAME} = import.meta.env

const useGame = () => {
  const { unityProvider, requestFullscreen, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: `${VITE_URL_ASSETS_GAME}/cys.loader.js`,
    dataUrl: `${VITE_URL_ASSETS_GAME}/cys.data.br`,
    frameworkUrl: `${VITE_URL_ASSETS_GAME}/cys.framework.js.br`,
    codeUrl: `${VITE_URL_ASSETS_GAME}/cys.wasm.br`,
    streamingAssetsUrl: `${VITE_URL_ASSETS_GAME}/../StreamingAssets`,
  });

  const goFullscreen = () => {
    requestFullscreen(true)
  }

  return {
    unityProvider,
    goFullscreen, 
    isLoaded,
    loadingProgression
  }
}

export default useGame