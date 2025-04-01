import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"Parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an H1 tag!!!")))
const H1=(<h1>"heading using JSX"</h1>)
const element = React.createElement("H1", {id:"heading"}, "Hello from React!!!"); // element is nothing but JS objects in react(these are not HTML element).
const root = ReactDOM.createRoot(document.getElementById("root"));

const Firstcomponent=()=>{
    return <h1>"React Component"</h1>;
}
const Secondcomponent=()=>
    <h1> "Second component" </h1>;

const Thirdcomponent =()=>{
    <div>
    <Firstcomponent />;
    <h1>"Component composition"</h1>
    </div>
}

root.render(<Thirdcomponent/>); // it is basically create an element under root and render it(similiar to writing under root element in HTML  ex: <div id="root"> <h1>""xyz</h1></div>