import  Header  from "./Header";
import { reslist } from "../utils/mockdata";
import { Rescontainer } from "./Resturants";

export const Body = () => {
    return (
      <div>
        <Header />
        <div className="body">
          <div className="Searchbar">
            <button className="button" name="Search"></button>
          </div>
          <div className="res-container">
              {
                  reslist.map((res)=>(<Rescontainer
                  resdata={res}
                  key={res.info.id}/>
              ))}
          </div>
        </div>
      </div>
    );
  };