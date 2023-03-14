import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import { useContext, useCallback } from "react"
import { useUnityContext } from "react-unity-webgl";
import airdrop from "../services/airdrop.service";

const AirdropContext = React.createContext()

export const AirdropProvider = ({ children }) => {
  const { wallet } = useWallet();
  const connection = useConnection();
  const { addEventListener, removeEventListener } = useUnityContext();

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    }
  }, [addEventListener, removeEventListener, handleGameOver])

  const handleGameOver = useCallback(async (score) => {
    await requestAirdrop(score);
  }, [requestAirdrop]);

  const requestAirdrop = useCallback(async (amount) => {
    if (!wallet) return;

    const serializedTx = await airdrop.requestTx({
      to: wallet?.publicKey,
      amount,
    });
    const tx = VersionedTransaction.deserialize(serializedTx);
    await wallet?.signTransaction(tx);
    const signature = await connection.sendRawTransaction(tx.serialize());
    await connection.confirmTransaction(signature);

    return signature;
  }, [wallet, connection]);

  return (
    <AirdropContext.Provider value={{}}>
      {children}
    </AirdropContext.Provider>
  )
}

export const useAirdropRequest = () => {
  const context = useContext(AirdropContext)

  if (!context) 
    throw new Error(
      "useAirdropRequest must be used within a AirdropContextProvider"
    )

  return context
}

