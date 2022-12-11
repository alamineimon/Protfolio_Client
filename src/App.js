import AOS from 'aos';
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routers/Router/Router";
import 'aos/dist/aos.css';


AOS.init();

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
