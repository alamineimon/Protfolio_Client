import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import ProjectsBody from "../../Pages/Projects/ProjectsBody";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Skills from "../../Pages/Skills/Skills";


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
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/aboutme",
          element: <AboutMe />,
        }
      ]
    }
  ]);
  
  export default router;