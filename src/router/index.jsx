import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login"
import Game from "../pages/Game";
import RequiredAuth from "../layouts/RequiredAuth";
import loaderRequireAuth from "../layouts/RequiredAuth/loaderRequiredAuth";

const router = createBrowserRouter([{
  path: '/',
  element: <Login />
},
{
  path: '/game',
  loader: loaderRequireAuth,
  element: (
    <RequiredAuth>
      <Game />
    </RequiredAuth>
  )
}])

export default router