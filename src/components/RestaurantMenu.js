import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo=useRestaurantMenu(resId);
    console.log(resInfo);
  if(resInfo ===null) return <Shimmer/>;
  
  const {name,city} = resInfo?.cards[2]?.card?.card?.info;
  const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  if(itemCards===null) return <Shimmer/>;
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
