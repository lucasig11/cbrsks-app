import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login"
import Game from "../pages/Game";

const router = createBrowserRouter([{
  path: '/',
  element: <Login />
},
{
  path: '/game',
  element: <Game />
}])

export default router