import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Foods from './component/Foods';
import MealDetails from './component/MealDetails';
import About from './component/About';
import Contact from './component/Contact';
import LoadingSpinner from './component/LoadingSpinner';
import Error from './component/error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/food',
        element: <Foods></Foods>,
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path:'meal/:mealId',
        element: <MealDetails></MealDetails>,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      {
        path:'/about',
        element: <About></About>,
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'loader',
        element: <LoadingSpinner></LoadingSpinner>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
