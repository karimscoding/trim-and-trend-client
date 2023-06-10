import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
