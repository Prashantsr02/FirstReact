import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showItems, setShowItems] = useState();
  const [showIndex, setShowIndex] = useState(-1);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, city } = resInfo?.cards[2]?.card?.card?.info;

  const cateogories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(cateogories);

  return (
    <div className="text-center">
      <h1 className=" content-center font-bold text-2xl p-4"> {name}</h1>
      <h1 className="items-center font-bold text-xl">Menu</h1>
      {cateogories.map((category, index) => (
        <RestaurantsCategory
          data={category.card.card}
          key={category.card.card.title}
          showItems={showIndex === index}
          setShowIndex={() => setShowIndex(showIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
