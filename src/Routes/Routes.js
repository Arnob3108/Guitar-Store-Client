import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);