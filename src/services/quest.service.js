const quest = {
  getActive: async () => {
    const url = "/api/quest/active";

    try {
      const response = await fetch(url);
      const { status, quest: questApi } = await response.json();

      if (status !== 200) throw new Error("Doesn't have an active quest");

      return questApi;
    } catch (error) {
      return false;
    }
  },
  getPoints: async () => {
    const url = "/api/quest/point";

    try {
      const response = await fetch(url);
      const { status, total } = await response.json();

      if (status !== 200) throw new Error("Doesn't have an active quest");

      return total;
    } catch (error) {
      return false;
    }
  },
  prize: async () => {
    const url = "/api/quest/prize";

    try {
      const response = await fetch(url, { method: "POST" });
      const { status } = await response.json();

      if (status !== 200) throw new Error("Doesn't have an active quest");

      return status === 200;
    } catch (error) {
      return false;
    }
  },
  check: async () => {
    const url = "/api/quest/prize";

    try {
      const response = await fetch(url);
      const { status } = await response.json();

      if (status !== 200) throw new Error("Doesn't have an active quest");

      return status === 200;
    } catch (error) {
      return false;
    }
  },
};

export default quest;
