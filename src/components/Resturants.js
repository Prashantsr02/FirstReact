import { CDN_URL } from "../utils/constant";
import UserContext from "./UserContext";
import { useContext } from "react";


export const Rescontainer = (props) => {
    const {loggedInUser} = useContext(UserContext);
    const { resdata } = props;
    const{name,cuisines,costForTwo,avgRating} = resdata?.info;
    const{slaString}=resdata?.info.sla;
    return (
      <div className="ml-24 w-[250px] h-[400px]">
        <img
          className="flex flex-wrap w-[250px] h-[200px] rounded-2xl"
          alt="res-logo"
          src=
            {CDN_URL +
            resdata.info.cloudinaryImageId}
        />
        <h3 className="font-bold m-0.5">{name}</h3>
        <h3 className="font-medium m-0.5 " >{cuisines.join(", ")}</h3>
        <h4 className="font-medium m-0.5">⭐ {avgRating}  • {slaString}</h4>
        <h4 className="font-sans m-0.5">{costForTwo}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    );
  };

export const EnhancedRescontainer=(Rescontainer)=>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
        <Rescontainer {...props}/>
      </div>
    )
  }
}  
  
