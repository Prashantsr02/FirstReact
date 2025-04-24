import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import {useResataurantMenu} from "../utils"

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo=useResataurantMenu(resId);

  if(menu===null) return <Shimmer/>;
  
  const {name,city} = menu?.cards[2]?.card?.card?.info;
  const{itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1> {name}</h1>
      <ul>
        <li>
        <h3>
        { itemCards.map((item)=>{item.card.info.name}) }
      </h3>
        </li>
      </ul>
      <h3> {city} </h3>
    </div>
  );
};

export default RestaurantMenu;
