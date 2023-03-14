import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import InfoBox from "../../components/InfoBox";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { Container, SkipButton } from "./ConnectWallet.styles";

function ConnectWallet() {
  return (
    <Container>
      <Title>Connect your wallet to collect grizzly tokens</Title>

      <Text className="subtitle" light>
        Special feature for Solana Grizzlython
      </Text>

      <WalletMultiButton />

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
