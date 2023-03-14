import { useWallet } from "@solana/wallet-adapter-react";

const loaderRequireWallet = () => {
  const wallet = useWallet();

  return {
    wallet: wallet.publicKey
  };
}

export default loaderRequireWallet;
