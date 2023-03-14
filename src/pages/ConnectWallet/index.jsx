import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate, useLocation } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";

export default function Page() {
  const { connected } = useWallet();
  const location = useLocation();

  if (connected) {
    return <Navigate to="/game" state={{ from: location }} replace />;
  }

  return <ConnectWallet />;
}
