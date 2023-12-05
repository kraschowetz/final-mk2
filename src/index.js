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
import Leftists from './javascript/school/Leftists';
import Lang from './javascript/school/lang';
import Math from './javascript/school/math';
import IT from './javascript/school/IT';
import AI from './javascript/school/AI';
import Auto from './javascript/school/Auto';
import ML from './javascript/school/MachineLearning';
import RA from './javascript/school/RA';

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
    path: '/humanas',
    element: <Leftists/>
  },
  {
    path: '/linguagens',
    element: <Lang/>
  },
  {
    path: '/matematica',
    element: <Math/>
  },
  {
    path: '/ti',
    element: <IT/>
  },
  {
    path: '/ia',
    element: <AI/>
  },
  {
    path: '/automacao',
    element: <Auto/>
  },
  {
    path: 'machine_learning',
    element: <ML/>
  },
  {
    path: '/ra',
    element: <RA/>
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