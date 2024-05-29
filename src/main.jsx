import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContent from "./MyComponent/MainContent.jsx";
import Skills from "./MyComponent/Skills.jsx";
import Projects from "./MyComponent/Projects.jsx";
import EducationalBackground from "./MyComponent/EducationalBackground.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />,
children : [
  {path:"/", element: <MainContent></MainContent>},
  {path:"/skills"  , element:<Skills></Skills>},
  {path:"/projects"  , element:<Projects></Projects>},
  {path:"/education"  , element:<EducationalBackground></EducationalBackground>},
 
]
}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
