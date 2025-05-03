import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./store/home/home";
import dashboardRoutes from "./dashboard/dashboard-routes";
import Login from "../views/login/Login"
import Register from "../views/register/Register";


const router = createBrowserRouter([homeRoutes, dashboardRoutes, 
    {
        path: "/login",
        element: <Login />,
      },
    {
        path: "/register", 
        element: <Register />
    }
]);

export default router;
