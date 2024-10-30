import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Home from "../pages/Home";
import GeneratedImage from "../pages/GeneratedImage";

const router = createBrowserRouter([
  {
    element: <Wrapper />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <GeneratedImage />,
        path: "/generatedimage",
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export const Allroutes = () => {
  return <RouterProvider router={router} />;
};
