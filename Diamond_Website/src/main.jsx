import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx"; 
import Product from "./Pages/Product.jsx"; 
import Blogs from "./Pages/Blogs.jsx";    
import Contact from "./Pages/Contact.jsx";      
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout route (Navbar + Footer)
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "/Blogs",
        element: <Blogs />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
