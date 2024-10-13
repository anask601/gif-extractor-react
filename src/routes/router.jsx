import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Search from "../pages/search";
import GifPage from "../pages/gifPage";
import Favorites from "../pages/favorites";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/",
        element: <Favorites />,
      },
    ],
  },
]);
