import ListItem from "./ListItems";
import { useState } from "react";

const RestaurantsCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  console.log(data);
  return (
    <div className=" w-7/12 font-sans  p-6 m-auto my-4 bg-gray-50 shadow-xl ">
      <div
        className="flex justify-between font-bold cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "↑" : "↓"}</span>
      </div>
      <h1>{showItems && <ListItem items={data.itemCards} />}</h1>
    </div>
  );
};

export default RestaurantsCategory;
