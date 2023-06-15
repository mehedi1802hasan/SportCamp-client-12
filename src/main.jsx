import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import Provider from './Firebase/Provider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient=new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider> 
    <QueryClientProvider  client={queryClient}><RouterProvider router={router} /></QueryClientProvider>
    </Provider>
  </React.StrictMode>
)