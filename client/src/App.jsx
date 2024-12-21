import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutComponent from "./components/layouts";
import Page404Error from "./pages/error/Page404Error";
import { routes } from "./routes";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <LayoutComponent />,
      errorElement: <Page404Error />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
