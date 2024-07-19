import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/dashboard/preview";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import RootLayout from "./layouts/rootLayout";
import DashboardLayout from "./layouts/dashboardLayout";
import UserRoute from "./components/Routes/UserRoute";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Achievements from "./pages/dashboard/achievements";
import Experience from "./pages/dashboard/experience";
import Projects from "./pages/dashboard/projects";
import Skills from "./pages/dashboard/skills";
import Socials from "./pages/dashboard/socials";
import Education from "./pages/dashboard/education";
import Profile from "./pages/dashboard/profile";

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("portiUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      console.log("User---->", parsedUser);
      dispatch({
        type: "LOGGED_IN_USER",
        payload: parsedUser,
      });
    }
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },

    {
      path: "/dashboard",
      element: (
        <UserRoute>
          <DashboardLayout user={user} />
        </UserRoute>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/dashboard/achievements", element: <Achievements /> },
        { path: "/dashboard/profile", element: <Profile /> },
        { path: "/dashboard/education", element: <Education /> },
        { path: "/dashboard/experience", element: <Experience /> },
        { path: "/dashboard/preview", element: <Preview /> },
        { path: "/dashboard/projects", element: <Projects /> },
        { path: "/dashboard/skills", element: <Skills /> },
        { path: "/dashboard/socials", element: <Socials /> },
      ],
    },
  ]);

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
