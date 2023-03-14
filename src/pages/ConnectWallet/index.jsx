import ConnectWallet from "./ConnectWallet";
import {useEffect} from 'react'
import {useWallet} from '@solana/wallet-adapter-react'
import {useNavigate} from "react-router-dom"

export default () => {
  const { connected } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (connected) {
      sendMessage("NativeLibrary", "OnWalletConnected", publicKey.toBase58());
      navigate('/game')
    }
  }, [connected, navigate]);

  return <ConnectWallet />
}
  
