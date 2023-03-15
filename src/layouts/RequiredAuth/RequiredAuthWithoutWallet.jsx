import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";

function RequiredAuthWithoutWallet({ children }) {
  const wallet = useWallet();
  const user = useLoaderData();
  const location = useLocation();

  return user.authorized && user.isGuild && !wallet.connected ? (
    children
  ) : (
    <Navigate to="/game" state={{ from: location }} replace />
  );
}

export default RequiredAuthWithoutWallet;
