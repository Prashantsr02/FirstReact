import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import UseContext from "react";
import {useSelector} from "react-redux"; 



export const Header = () => {
  
  const [loginbutton, setLoginbutton] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store)=>store.cart.items);  


  return (
    <div className="flex justify-between bg-amber-600 shadow-2xl">
      <div className="size-32 p-4">
        <Link to="/">
          <img src={LOGO_URL} />
        </Link>
      </div>
      <div className=" flex items-center">
        <ul className="flex  flex-wrap py-3">
          <li className="px-2 " >Online Status :{onlineStatus ? " 🟢" : " 🔴"}</li>
          <li className="px-2">
            <Link to="About"> About </Link>
          </li>
          <li className="px-2">
            <Link to="/Contact">Contact US</Link>{" "}
          </li>
          <li className="px-2 cursor-pointer font-bold">
          <Link to="/cart"> Cart - {cartItems.length} </Link> 
            </li>
          <button
            className="px-2 cursor-pointer"
            onClick={() => {
              loginbutton === "Login"
                ? setLoginbutton("Logout")
                : setLoginbutton("Login");
            }}
          >
            {loginbutton}
          </button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
