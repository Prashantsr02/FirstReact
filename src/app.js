import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return(
  <div className="app">
    <Header />
    <Body />
  </div>
  );
};
const approuter= createBrowserRouter([
  {
    path: "/",
    element : <Applayout/> ,
    errorElement: <Error/>
  },
  {
    path:"/About",
    element:<About />
  },
  {
    path:"/Contact",
    element:<Contact />
  },
  {
    path:"/Restaurants/:resid",
    element:<RestaurantMenu />
  }
])

root.render(<RouterProvider router={approuter} />);
// it is basically create an element under root and
// render it(similiar to writing under root element in HTML
// ex: <div id="root"> <h1>""xyz</h1></div>
