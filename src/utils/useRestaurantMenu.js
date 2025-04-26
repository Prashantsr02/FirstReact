import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";
const useResataurantMenu=(resId)=>{
    const[resInfo, setResInfo]=useState(null);

    useEffect(()=>{
        fetchdata();
    }
    ,[]);

    const fetchdata=async()=>{
        const data=await(MENU_URL+resId);
        const jsondata=await data.json();
        setResInfo(jsondata);
    }
    return resInfo;
}
export default useResataurantMenu;