import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";


const useRestaurantMenu=(resId)=>{
    const[resInfo, setResInfo]=useState(null);

    useEffect(()=>{
        fetchdata();
    }
    ,[]);

    const fetchdata=async()=>{
        const data=await fetch(MENU_URL+resId);
        const jsondata=await data.json();
        setResInfo(jsondata.data);
    }
    return resInfo;
}
export default useRestaurantMenu;