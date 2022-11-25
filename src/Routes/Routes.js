import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../LayOut/DashboardLayout";
import Main from "../LayOut/Main";
import Blogs from "../Pages/Blogs/Blogs";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleCategory from "../Pages/Home/Categories/SingleCategory/SingleCategory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "category/:id",
        element: <SingleCategory></SingleCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
