import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import BrowePage from "./BrowePage";
import Header from "./Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="relative">
        <Header />
        <HomePage />
      </div>
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
