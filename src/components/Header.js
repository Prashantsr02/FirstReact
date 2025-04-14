import { LOGO_URL } from "../utils/constant";


export const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL}/>
        </div>
        <div className="Navbar">
          <ul className="Nav-items">
            <li>About</li>
            <li>Contact US</li>
            <li>Cart</li>
            <li>Log in</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;
 