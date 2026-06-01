// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Parent layout component
    children: [
      {
        path: "home", // Matches exactly "/"
        element: <Home />,
      },
      {
        path: "about", // Matches "/about"
        element: <About />,
      },

    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
