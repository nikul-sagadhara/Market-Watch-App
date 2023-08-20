import React from 'react'
import Body from './components/Body';
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import ReactDOM from 'react-dom/client'
import Nifty50 from './components/Nifty50';
import NiftyBank from './components/NiftyBank';
import NiftyFinServ from './components/NiftyFinServ';
import Crypto from './components/Crypto';

const App = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/nifty50",
        element: <Nifty50 />,
      },
      {
        path: "/niftybank",
        element: <NiftyBank />,
      },
      {
        path: "/niftyfinservice",
        element: <NiftyFinServ />,
      },
      {
        path: "/crypto",
        element: <Crypto />,
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);