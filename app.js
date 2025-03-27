import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"Parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an H1 tag!!!")))

const element = React.createElement("H1", {id:"heading"}, "Hello from React!!!"); // element is nothing but JS objects in react(these are not HTML element).
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // it is basically create an element under root and render it(similiar to writing under root element in HTML  ex: <div id="root"> <h1>""xyz</h1></div>