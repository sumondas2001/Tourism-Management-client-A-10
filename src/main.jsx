import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Page/Login/Login.jsx';
import Register from './Page/Regiseter/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './Page/Error/ErrorPage.jsx';
import AddTouristsSpot from './Page/AddTouristsSpot/AddTouristsSpot.jsx';
import AllTouristsSpot from './Page/AllTouristsSpot/AllTouristsSpot.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import MyList from './Page/MyList/MyList.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addTouristsSpot',
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:5000/allTouristsSpot')
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/viewDetails/${params.id}`)
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
