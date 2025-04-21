import Header from "./Header";
import { reslist } from "../utils/mockdata";
import { Rescontainer } from "./Resturants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredResaurant] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (listOfResturant.length) === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="body">
        <div className="Filter">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-restaurant"
            onClick={() => {
              const filterrestaurants = filteredRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResaurant(filterrestaurants);
            }}
          >
            Search Restaurants
          </button>
          <button
            className="button"
            onClick={() => {
              const filterdlist = listOfResturant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredResaurant(filterdlist);
              console.log(filterdlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((res) => (
            <Rescontainer key={res.info.id} resdata={res} />
          ))}
        </div>
      </div>
    </div>
  );
};
