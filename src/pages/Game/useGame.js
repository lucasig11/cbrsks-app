import { useCallback, useEffect, useState } from 'react';
import {useUnityContext} from 'react-unity-webgl'
import quest from '../../services/quest.service';

const {VITE_URL_ASSETS_GAME} = import.meta.env

const useGame = () => {
  const [questCompleted, setQuestCompleted] = useState(false)
  const { wallet } = useWallet();
  const connection = useConnection();
  const { unityProvider, requestFullscreen, isLoaded, loadingProgression, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: `${VITE_URL_ASSETS_GAME}/cys.loader.js`,
    dataUrl: `${VITE_URL_ASSETS_GAME}/cys.data.br`,
    frameworkUrl: `${VITE_URL_ASSETS_GAME}/cys.framework.js.br`,
    codeUrl: `${VITE_URL_ASSETS_GAME}/cys.wasm.br`,
    streamingAssetsUrl: `${VITE_URL_ASSETS_GAME}/../StreamingAssets`,
  });

  const handleRequestAirdrop = useCallback(async (tx) => {
    try {
      const tx = VersionedTransaction.deserialize(tx);
      await wallet?.signTransaction(tx);
      const signature = await connection.sendRawTransaction(tx.serialize());
      await connection.confirmTransaction(signature);
      return signature;
    } catch (err) {
      console.error(err);
    }
  }, [wallet, connection]);

  const handleEnd = useCallback(() => {
    try {
      const time = setTimeout(async () => {
        const completed = await quest.getPoints()
        setQuestCompleted(completed)
      }, 3000);

      return () => {
        clearTimeout(time)
      }
    } catch(error) {
      setQuestCompleted(false)
    }
  }, [])

  const goFullscreen = () => {
    requestFullscreen(true)
  }

  useEffect(() => {
    addEventListener('OnMatchSoloEnded', handleEnd)
    return () => {
      removeEventListener('OnMatchSoloEnded')
    }
  }, [addEventListener, removeEventListener, handleEnd])

  useEffect(() => {
    addEventListener("onAirdropRequest", handleRequestAirdrop);
    return () => {
      removeEventListener("onAirdropRequest", handleRequestAirdrop);
    }
  }, [addEventListener, removeEventListener, handleGameOver])

  return {
    unityProvider,
    goFullscreen, 
    isLoaded,
    loadingProgression,
    questCompleted
  }
}

export default useGame
