
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../RootLayout/RootLayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <p>404 Error</p>
  },
]);

export default router;