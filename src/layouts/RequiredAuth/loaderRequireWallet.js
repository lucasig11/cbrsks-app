import { useWallet } from "@solana/wallet-adapter-react";

const loaderRequireWallet = () => {
  const wallet = useWallet();

  if (!wallet.connected) {
    throw new Error("Wallet not connected");
  }

  return wallet.publicKey;
}

export default loaderRequireWallet;
