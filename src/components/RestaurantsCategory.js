import ListItem from "./ListItems";
import { useState } from "react";


const RestaurantsCategory = ({ data,showItems }) => {

  console.log(data);
  return (
    <div className=" w-6/12 font-sans  p-6 m-auto my-4 bg-gray-50 shadow-xl ">
      <div className="flex justify-between font-bold cursor-pointer">
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{"↓"}</span>
      </div>
      <h1>{showItems && <ListItem items={data.itemCards} />}</h1>
    </div>
  );
};

export default RestaurantsCategory;
