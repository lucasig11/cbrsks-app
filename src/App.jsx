
import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react'
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui'
import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {clusterApiUrl} from '@solana/web3.js';
import {useMemo} from 'react'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import router from './router'

import '@solana/wallet-adapter-react-ui/styles.css';

export default function App({ children }) {
  const network = import.meta.env.VITE_SOLANA_NETWORK;
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(() => [
    new GlowWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new TorusWalletAdapter(),
    new LedgerWalletAdapter(),
    new SolletExtensionWalletAdapter(),
    new SolletWalletAdapter(),
  ], [network]);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
            {children}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}
