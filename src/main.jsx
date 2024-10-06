import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import "./main.css";
import Register from "./pages/Register";
import Events from "./pages/Events";

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/events", element: <Event/>},
  { path: "/register", element: <Register/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)
