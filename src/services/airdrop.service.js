const airdrop = {
  requestAirdrop: async (wallet, coins) => {
    const url = "/api/grizzlython/requestAirdrop";
    try {
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
      const rawTx = await response.text();

      if (response.status !== 200) {
        return false;
      }
      return rawTx;
    } catch (error) {
      throw error;
    }
  },
};

export default airdrop;
