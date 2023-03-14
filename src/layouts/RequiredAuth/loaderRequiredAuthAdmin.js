import auth from "../../services/auth.service";
import user from "../../services/user.service";

const loaderRequireAuthAdmin = async () => {
  const authorized = await auth.refreshToken();
  const admin = await user.checkAdmin();

  return {
    authorized,
    admin,
  };
};

export default loaderRequireAuthAdmin;
