import Main from "../LayOut/Main";
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../LoginRegistration/Login";
import Registration from "../LoginRegistration/Registration";
import Error from "../Shared/Error";
import Dashboard from "../LayOut/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ManageClasess from "../Pages/Dashboard/ManageClasess";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";
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
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'',
          element:<DashboardHome></DashboardHome>
        },
        {
          path:'manageuser',
          element:<ManageUser></ManageUser>
        },{
          path:'manageClasses' ,
          element:<ManageClasess></ManageClasess>
        },{
          path:'addclass' ,
          element:<AddClass></AddClass>
        },{
          path: 'myclasses' ,
          element:<MyClasses></MyClasses>
        },{
          path:'myselectedclasses' ,
          element:<MySelectedClasses></MySelectedClasses>
        },{
          path:'myenrolledclasses' ,
          element:<MyEnrolledClasses></MyEnrolledClasses>
        }
      ]
    },{
      path:'*',
      element:<Error></Error>
    }
  ]);

  export default router;