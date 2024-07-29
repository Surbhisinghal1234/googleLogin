import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import Config from './components/Config'
// import Home from './components/Home'
// import Signin from "./components/Signin";
import SignIn from "./components2/SignIn";
import Profile from "./components2/Profile";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
]);
function App() {
  return (
    <>
      {/* <Signin /> */}
      {/* <SignIn/> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
