import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login"
import Game from "../pages/Game";
import RequiredAuth from "../layouts/RequiredAuth";
import loaderRequireAuth from "../layouts/RequiredAuth/loaderRequiredAuth";
import Admin from "../pages/Admin/Admin";
import Dashboard from "../pages/Admin";
import loaderRequireAuthAdmin from "../layouts/RequiredAuth/loaderRequiredAuthAdmin";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    },
    {
      path: 'game',
      loader: loaderRequireAuth,
      element: (
        <RequiredAuth>
          <Game />
        </RequiredAuth>
      )
    },
    {
      path: 'admin',
      element: <Admin />,
    },
    {
      path: 'admin/dashboard',
      loader: loaderRequireAuthAdmin,
      element: (
        <Dashboard />
      )
    }
  ]
)

export default router