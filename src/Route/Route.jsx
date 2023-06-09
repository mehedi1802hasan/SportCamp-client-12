import Main from "../LayOut/Main";
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
      
   
    },
  ]);

  export default router;