
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import SkillsSection from "../Pages/SkillsSection";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <p>404 Error</p>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "/skills",
            Component: SkillsSection
        }
    ]
  },
]);

export default router;