import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './javascript/home';
import Redirect from './javascript/redirect';
import Err from './javascript/err';
import Art from './javascript/art';
import School from './javascript/school/school';
import Science from './javascript/school/science';

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
  },
  {
    path: '/escola',
    element: <School/>
  },
  {
    path: '/ciencias',
    element: <Science/>
  },
  {
    path: '*',
    element: <Err/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);