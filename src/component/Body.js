import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import BrowePage from "./BrowePage";
import Header from "./Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "browse",
    element: (
        <BrowePage />
      
    ),
  },
]);
export default router;
