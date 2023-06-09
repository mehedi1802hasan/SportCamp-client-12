import Main from "../LayOut/Main";
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../LoginRegistration/Login";
import Registration from "../LoginRegistration/Registration";
import Error from "../Shared/Error";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'registration',
          element:<Registration></Registration>}
      ]
      
   
    },{
      path:'*',
      element:<Error></Error>
    }
  ]);

  export default router;