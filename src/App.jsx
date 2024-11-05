import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MatchResults from "./Components/MatchResults";

import "./Styles/animate.css";
import "./Styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/match-results/",
    element: (
      <div>
        <MatchResults />
      </div>
    ),
  },
]);
function App() {
  return (
    <div className="">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
