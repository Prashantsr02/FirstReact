import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [loginbutton, setLoginbutton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL} />
        </Link>
      </div>
      <div className="Navbar">
        <ul className="Nav-items">
          <li>Online Status :{onlineStatus ? " 🟢" : " 🔴"}</li>
          <li>
            <Link to="About"> About </Link>
          </li>
          <li>
            <Link to="/Contact">Contact US</Link>{" "}
          </li>
          <li>Cart</li>
          <button
            className="login"
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
