import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import ProjectsBody from "../../Pages/Projects/ProjectsBody";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <ProjectsBody />,
        },
        {
          path: "/contact",
          element: <Contact />,
        }
      ]
    }
  ]);
  
  export default router;