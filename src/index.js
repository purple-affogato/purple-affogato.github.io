import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import ProjectList from './Projects';
import Template from './App';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Error';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Template />, 
    errorElement: <ErrorPage />,
    children: [
      { path: "about-me", element: <AboutMe />, },
      { path: "projects", element: <ProjectList />, },
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
