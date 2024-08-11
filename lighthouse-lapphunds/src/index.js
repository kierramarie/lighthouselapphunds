import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TheFinnishLapphund from './pages/theFinnishLapphund';
import About from './pages/about';
import Home from './pages/home';
import News from './pages/news';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/theFinnishLapphund",
        element: <TheFinnishLapphund />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
    errorElement: <h2>Error Page</h2>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
