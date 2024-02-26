import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import './index.css'
import ActiveReminders from './pages/ActiveReminders.jsx';
import AllReminders from './pages/AllReminders.jsx';
import TodayReminders from './pages/TodayReminders.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ActiveReminders />,
      },
      {
        path: "/all",
        element: <AllReminders />,
      },
      // {
      //   path: "/active",
      //   element: <ActiveReminders />,
      // },
      {
        path: "/today",
        element: <TodayReminders />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
