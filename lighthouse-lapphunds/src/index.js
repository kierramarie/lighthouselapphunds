import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TheFinnishLapphund from './pages/theFinnishLapphund';
import Home from './pages/home';
import News from './pages/news';
import Males from './pages/males';
import Females from './pages/females';
import Now from './pages/now';
import Later from './pages/later';
import Gallery from './pages/gallery';
import Contact from './pages/about';

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
        path: "/theFinnishLapphund",
        element: <TheFinnishLapphund />,
      },
      {
        path: "/males",
        element: <Males />,
      },
      {
        path: "/females",
        element: <Females />,
      },
      {
        path: "/now",
        element: <Now />,
      },
      {
        path: "/later",
        element: <Later />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
