import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },

    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "preview",
      element: <Preview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
