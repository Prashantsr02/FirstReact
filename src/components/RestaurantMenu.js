import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsondata = await data.json();
    console.log(jsondata);
    setMenu(jsondata.data);
  };
  if (menu === null) return <Shimmer />;
  const { name, city } = menu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1> {name} : {city}</h1>
      <ul>
        <li>
          <h3>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
              {item.card.info.name} </li>
            ))}
          </h3>
        </li>
      </ul>
      
    </div>
  );
};

export default RestaurantMenu;
