import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./components/UserContext";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import { useState,useEffect } from "react";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Comp = lazy(() => import("./components/About"));


const Applayout = () => {

  const [user, setUser] = useState();
  
  useEffect(()=>{
    const data={
      name:"Prashant"
    };
    setUser(data.name);
  },[]);
  
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedinUser: user, setUser }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [{
      path: "/About",
      element: <Suspense fallback={<Shimmer />}><Comp /></Suspense>
    },
    {
      path: "/Contact",
      element: <Contact />
    },
    {
      path: "/Restaurants/:resId",
      element: <RestaurantMenu />
    },
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/cart",
      element: <Cart />
    }]
  }
])

root.render(<RouterProvider router={approuter} />);
// it is basically create an element under root and
// render it(similiar to writing under root element in HTML
// ex: <div id="root"> <h1>""xyz</h1></div>
