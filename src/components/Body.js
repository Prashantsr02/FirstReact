import Header from "./Header";
import { reslist } from "../utils/mockdata";
import { Rescontainer } from "./Resturants";
import { useState } from "react";

export const Body = () => {
  const [listOfResturant, SetListOfResturant] = useState(reslist);
  return (
    <div>
      <Header />
      <div className="body">
        <div className="Filter">
          <button
            className="button"
            onClick={() => {
              const filterdlist = listOfResturant.filter(
                (res) => res.info.avgRating > 4.5
              );
              SetListOfResturant(filterdlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {listOfResturant.map((res) => (
            <Rescontainer key={res.info.id} resdata={res} />
          ))}
        </div>
      </div>
    </div>
  );
};
