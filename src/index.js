import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './javascript/home';
import Redirect from './javascript/redirect';
import Art from './javascript/art';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/arte',
    element: <Art/>
  },
  {
    path: '/programacao',
    element: <Home/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);