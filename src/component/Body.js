import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import BrowePage from "./BrowePage";
import Header from "./Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: "browse",
    element: (
      <>
        <Header />
        <BrowePage />
      </>
    ),
  },
]);
export default router;
