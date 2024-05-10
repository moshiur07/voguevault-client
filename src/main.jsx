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
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import ErrorPage from './Pages/Error/ErrorPage';
import Update from './Pages/Update/Update';
import SIngleBrand from './Pages/SingleBrandProducts/SIngleBrand';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute'

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
        element: <PrivateRoute><AddItems/></PrivateRoute>,
      },
      {
        path:'/register',
        element: <Register/> ,
      },
      {
        path:'/login',
        element: <Login/> ,
      },
      {
        path:'/carts',
        element: <PrivateRoute><Cart/></PrivateRoute> ,
        loader: ()=> fetch('http://localhost:5000/carts'),
      },
      {
        path:'/update/:id',
        element: <PrivateRoute><Update/> </PrivateRoute>,
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
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
