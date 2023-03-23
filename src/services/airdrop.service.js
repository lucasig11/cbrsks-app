const airdrop = {
  requestAirdrop: async (wallet, coins) => {
    const url = "/api/grizzlython/requestAirdrop";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: wallet.toBase58(),
        amount: coins,
      }),
    });
    const { result, status } = await response.json();

    if (status !== 200) {
      return false;
    }

    return result;
  },
};

export default airdrop;
