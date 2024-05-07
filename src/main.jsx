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
import Details from './Pages/Details/Details';
import ErrorPage from './Pages/Error/ErrorPage';
import Update from './Pages/Update/Update';
import SIngleBrand from './Pages/SingleBrandProducts/SIngleBrand';

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
        path:'/carts',
        element: <Cart/> ,
        loader: ()=> fetch('http://localhost:5000/carts'),
      },
      {
        path:'/update/:id',
        element: <Update/> ,
        loader: ({params})=> fetch(`http://localhost:5000/update/${params.id}`),
      },
      {
        path:'/details/:id',
        element: <Details/> ,
        loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path:'/products/:name',
        element: <SIngleBrand/> ,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.name}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
