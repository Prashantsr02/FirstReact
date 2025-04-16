import Header from "./Header";
import { reslist } from "../utils/mockdata";
import { Rescontainer } from "./Resturants";
import { useState, useEffect } from "react";

export const Body = () => {
  const [listOfResturant, SetListOfResturant] = useState();
  const [searchText, SetSearchText] = useState("");

  useEffect(() => {
      fetchdata();
    }, []);
  
  const fetchdata = async =()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  }
  const json=data.json();
  SetListOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  return (
    <div>
      <Header />
      <div className="body">
        <div className="Filter">
        <input type="text" className="search" value={searchtext}
              onChange={(e)=>{
                SetSearchText(e.target.value());
              }}
            />
          <button className="search-restaurant"
              onClick={()=>{
                const filterrestaurants=listOfResturant.filter((res)=>
                  res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                );
              }}    
          >
            Search Restaurants  
          </button>
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
