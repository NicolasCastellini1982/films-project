import { createBrowserRouter } from "react-router-dom";
import HomeView from "../features/home/views/home_view";
import LoginView from "../features/login/views/login_view";
import PrivateRoute from "../auth/components/private.route";
import PublicRoute from "../auth/components/public_route";



// createBrowserRouter es una funcion que recibe un arreglo de rutas
export const appRouter = createBrowserRouter([
 {
   path: "/",
   element: 
   <PrivateRoute>
       <HomeView/>
   </PrivateRoute>
 },
 {
    path: "/login",
    element: 
    <PublicRoute>
        <LoginView/>
    </PublicRoute> 
 },
 {
  path: "*",
  element: <div>No se encontro la Pagina</div>,
 }
])