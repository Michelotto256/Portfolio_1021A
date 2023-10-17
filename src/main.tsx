import React from 'react'
import ReactDOM from 'react-dom/client'
import  './main.css'
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Meio from './componentes/meio/Meio';
import Contato from './componentes/contato/Contato';
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Header/>
    <Meio/>
    <Footer/>
    </>
  },
  {
    path: "/contato",
    element: 
    <>
    <Header/>
    <Contato/>
    <Footer/>
    </>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);