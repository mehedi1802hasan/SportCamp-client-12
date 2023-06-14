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
import Instructors from "../LayOut/Instructors";
import Classes from "../LayOut/Classes";
import Payment from "../Pages/Dashboard/Payment";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
          element:<Registration></Registration>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        }
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
          element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
        },{
          path:'manageClasses' ,
          element:<AdminRoute><ManageClasess></ManageClasess></AdminRoute>
        },{
          path:'addclass' ,
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
        },{
          path: 'myclasses' ,
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },{
          path:'myselectedclasses' ,
          element:<MySelectedClasses></MySelectedClasses>
        },{
          path:'myenrolledclasses' ,
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
        //// payment 
        {
    path: 'payment/:id',
    element:<Payment></Payment>,
    loader:({params})=>fetch(`http://localhost:5000/classese/${params.id}`)
        }
      ]
    },{
      path:'*',
      element:<Error></Error>
    }
  ]);

  export default router;