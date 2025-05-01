import { CDN_URL } from "../utils/constant";


export const Rescontainer = (props) => {
    const { resdata } = props;
    const{name,cuisines,costForTwo,avgRating} = resdata?.info;
    const{slaString}=resdata?.info.sla;
    return (
      <div className="flex size-44">
        <img
          className="flex flex-wrap"
          alt="res-logo"
          src=
            {CDN_URL +
            resdata.info.cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwo}</h4>
        <h4>{slaString}</h4>
        <h4>{avgRating}</h4>
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
  
