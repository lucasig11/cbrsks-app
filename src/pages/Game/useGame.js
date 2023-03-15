import { useCallback, useEffect, useState } from "react";
import { useUnityContext } from "react-unity-webgl";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { VersionedTransaction } from "@solana/web3.js";
import quest from "../../services/quest.service";

const { VITE_URL_ASSETS_GAME } = import.meta.env;

const useGame = () => {
  const wallet = useWallet();
  const connection = useConnection();
  const [questCompleted, setQuestCompleted] = useState(false);
  const {
    isLoaded,
    sendMessage,
    unityProvider,
    requestFullscreen,
    loadingProgression,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: `${VITE_URL_ASSETS_GAME}/cys.loader.js`,
    dataUrl: `${VITE_URL_ASSETS_GAME}/cys.data.br`,
    frameworkUrl: `${VITE_URL_ASSETS_GAME}/cys.framework.js.br`,
    codeUrl: `${VITE_URL_ASSETS_GAME}/cys.wasm.br`,
    streamingAssetsUrl: `${VITE_URL_ASSETS_GAME}/../StreamingAssets`,
  });

  useEffect(() => {
    if (wallet?.connected) {
      console.log("Wallet connected succesfully!");
      sendMessage(
        "NativeLibrary",
        "NotifyWalletConnected",
        wallet.publicKey.toBase58()
      );
    }
  }, [wallet, sendMessage]);

  const handleRequestAirdrop = useCallback(
    async (rawTx) => {
      try {
        const tx = VersionedTransaction.deserialize(
          Buffer.from(rawTx, "base64")
        );
        await wallet.signTransaction(tx);
        const signature = await wallet.sendTransaction(tx);
        await connection.confirmTransaction(signature);
        return signature;
      } catch (err) {
        /* eslint-disable-next-line no-console */
        console.error(err);
      }
      return null;
    },
    [wallet, connection]
  );

  const handleEnd = useCallback(() => {
    try {
      const time = setTimeout(async () => {
        const completed = await quest.getPoints();
        setQuestCompleted(completed);
      }, 3000);

      return () => {
        clearTimeout(time);
      };
    } catch (error) {
      setQuestCompleted(false);
    }
    return null;
  }, []);

  const goFullscreen = () => {
    requestFullscreen(true);
  };

  useEffect(() => {
    addEventListener("OnMatchSoloEnded", handleEnd);
    return () => {
      removeEventListener("OnMatchSoloEnded");
    };
  }, [addEventListener, removeEventListener, handleEnd]);

  useEffect(() => {
    addEventListener("OnAirdropRequestResponse", handleRequestAirdrop);
    return () => {
      removeEventListener("OnAirdropRequestResponse", handleRequestAirdrop);
    };
  }, [addEventListener, removeEventListener, handleRequestAirdrop]);

  return {
    unityProvider,
    goFullscreen,
    isLoaded,
    loadingProgression,
    questCompleted,
  };
};

export default useGame;
