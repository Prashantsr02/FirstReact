import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://dynamic.brandcrowd.com/asset/logo/1f90286e-473d-45bd-8224-cbf336e68aaa/logo-search-grid-2x?logoTemplateVersion=3&v=638596351497270000&text=Foodia" />
      </div>
      <div className="Navbar">
        <ul className="Nav-items">
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
          <li>Log in</li>
        </ul>
      </div>
    </div>
  );
};

const Rescontainer = () => {
  return (
    <div className="res-logo">
      <img
        className="res-image"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/3/20966713/bbaacc11fc360a2358d3d3c4129ff2d4_o2_featured_v2.jpg"
      />
      <h1>The Burger Club</h1>
      <h2>Burger, Fast Food, Coffee</h2>
      <h2>4.3*</h2>
      <h3>50 Minutes</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="Searchbar">
          <button className="button" name="Search"></button>
        </div>
        <div className="res-container">
          <Rescontainer />
        </div>
      </div>
    </div>
  );
};

root.render(<Thirdcomponent />);
// it is basically create an element under root and
// render it(similiar to writing under root element in HTML
// ex: <div id="root"> <h1>""xyz</h1></div>
