import { useState, useEffect } from "react";
import {usePramas} from "react-router-dom";
import {RES_URL} from "./utils/constant";

const RestaurantMenu =()=>{
    const[menu, setMenu]=useState();
    const{resid}=usePramas();
    useEffect(()=>{
        fetchmenu();
    }
    ,[]);

    const fetchmenu=async()=>{
        const data=await fetch(RES_URL+resid);
        const jsondata= await data.json();
    }
    setMenu(jsondata);
    
    return (
        <div>
            <h1> {jsondata.name}</h1>
            <h3> {jsondata.menu} </h3>  // have to map through all the menu items and show in UI.
            <h3> {jsondata.costfortwo} </h3>
        </div>
    )
}

export default RestaurantMenu;