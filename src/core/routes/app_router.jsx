import { createBrowserRouter } from "react-router-dom";
import HomeView from "../features/home/views/home_view";
import LoginView from "../features/login/views/login_view";
import PrivateRoute from "../auth/components/private_route";



// createBrowserRouter es una funcion que recibe un arreglo de rutas
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginView/>,

 }
])