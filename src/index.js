import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutMe from './AboutMe';
import ProjectList from './Projects';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "about-me", element: <AboutMe /> },
  { path: "projects", element: <ProjectList /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
