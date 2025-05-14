import { EnhancedRescontainer } from "./Resturants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESDATA_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "./UserContext"
import { useContext } from "react";
import { Rescontainer } from "./Resturants";


export const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredResaurant] = useState([]);
  const PromotedRestaurants = EnhancedRescontainer(Rescontainer);
  const { loggedinUser, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      RESDATA_URL
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
        <div className="flex m-4 p-4">
          <div className="">
            <input
              testid="search"
              type="text"
              className="border border-b-black "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-3 py-1 m-4 bg-orange-400 cursor-pointer rounded-xl"
              onClick={() => {
                const filterrestaurants = filteredRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredResaurant(filterrestaurants);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="cursor-pointer px-3 py-1 m-4 bg-orange-400 rounded-xl"
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
        <div>
          <button
            className="border border-b-black"
            value={loggedinUser}
            onChange={(e) => setUser(e.target.value)}
          >
          </button>
        </div>
        <div className="flex flex-wrap"
          test-id="res-list">
          {filteredRestaurant.map((res) => (
            <Link to={"/Restaurants/" + res.info.id} key={res.info.id}>
              {res.info.promoted ?
                (
                  <PromotedRestaurants resdata={res} />
                ) :
                (
                  <Rescontainer resdata={res} />
                )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
