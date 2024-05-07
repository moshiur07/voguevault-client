import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import AddItems from './Pages/AddItems/AddItems';
import Cart from './Pages/Cart/Cart';
import ErrorPage from './Pages/Error/ErrorPage';
import Update from './Pages/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
        element: <Home/> ,
      },
      {
        path:'/add',
        element: <AddItems/> ,
      },
      {
        path:'/cart',
        element: <Cart/> ,
      },
      {
        path:'/update',
        element: <Update/> ,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
