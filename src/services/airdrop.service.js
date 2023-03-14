const airdrop = {
  requestTx: async ({ to, amount }) => {
    const endpoint = "/api/requestAirdrop";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-functions-key": FUNCTION_KEY,
        },
        body: JSON.stringify({ to, amount }),
      });

      if (response.status !== 200) throw new Error("Error requesting airdrop");

      return response.text();
    } catch (error) {
      return false;
    }
  },
};

export default airdrop;
