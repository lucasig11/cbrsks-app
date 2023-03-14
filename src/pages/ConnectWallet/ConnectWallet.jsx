import { useCallback } from "react";
import InfoBox from "../../components/InfoBox";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { Container, SkipButton, ConnectButton } from "./ConnectWallet.styles";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

function ConnectWallet() {
  const { setVisible } = useWalletModal();

  const connect = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  return (
    <Container>
      <Title>
        Connect your wallet <br />
        to collect grizzly tokens
      </Title>

      <Text className="subtitle" light>
        Special feature for Solana Grizzlython
      </Text>

      <ConnectButton onClick={connect}>Connect wallet</ConnectButton>

      <SkipButton as="a" href="/game">
        Skip
      </SkipButton>

      <InfoBox
        title="During Closed Alpha, you may face some bugs."
        info="We appreciate your feedback."
      />
    </Container>
  );
}

export default ConnectWallet;
