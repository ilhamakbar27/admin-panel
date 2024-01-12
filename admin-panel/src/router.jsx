// import React from 'react'
import { createBrowserRouter, redirect } from "react-router-dom";
import { Homepage } from "./views/Homepage";
import { Add } from "./views/Add";
import Login from "./views/Login";
import { Edit } from "./views/Edit";
import Rootlayout from "./views/layout/Rootlayout";
import Categories from "./views/Categories";
import Editimg from "./views/Editimg";
import AddUser from "./views/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect('/home')
      }
      return null
    },
    // loader: rootLoader,
  },
  {
    loader: () => {
        if (!localStorage.access_token) {
          throw redirect('/')
        }
        return null
      },
    element: <Rootlayout />,
    children: [
      {
        path: "/home",
        element: <Homepage />,

        // loader: rootLoader,
      },
      {
        path: "/add-product",
        element: <Add />,
        // loader: rootLoader,
      },
      {
        path: "/edit-product/:id",
        element: <Edit />,
        // loader: rootLoader,
      },
      {
        path: "/categories",
        element: <Categories />,
        // loader: rootLoader,
      },
      {
        path: "/edit-image/:id",
        element: <Editimg />,
        // loader: rootLoader,
      },
      {
        path: "/add-user",
        element: <AddUser />,
        // loader: rootLoader,
      },
    ],
  },
]);

export default router;
