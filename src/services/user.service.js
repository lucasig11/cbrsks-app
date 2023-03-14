const user = {
  checkAdmin: async () => {
    const url = "/api/user/admin/verify";

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.admin) throw new Error("Invalid token");

      return true;
    } catch (error) {
      return false;
    }
  },
  checkOnGuild: async () => {
    const url = "/api/user/guild/check";

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.check) throw new Error("Invalid token");

      return true;
    } catch (error) {
      return false;
    }
  },
  addRolePassword: async () => {
    const url = "/api/user/role/password";

    try {
      const headers = {
        method: "POST",
      };
      const response = await fetch(url, headers);
      const data = await response.json();

      if (!data.check) throw new Error("Invalid token");

      return true;
    } catch (error) {
      return false;
    }
  },
  getUserCollections: async () => {
    try {
      const url = "/api/user/collections";

      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      return false;
    }
  },
  saveUserCollection: async (collection) => {
    try {
      const url = "/api/user/collection";

      const response = await fetch(url, { method: "POST", body: JSON.stringify({ collection }) });
      const data = await response.json();

      if (!data) throw new Error("Doesn't have data");

      return true;
    } catch (error) {
      return false;
    }
  },
  checkUserCollection: async () => {
    try {
      const url = "/api/user/collection/selected";

      const response = await fetch(url);
      const data = await response.json();

      if (!data) throw new Error("Doesn't have data");

      return data;
    } catch (error) {
      return false;
    }
  },
};

export default user;
