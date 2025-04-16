import { LOGO_URL } from "../utils/constant";


export const Header = () => {

  const[loginbutton, setLoginbutton]=useState("Login");

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
            <button className="login"
              onClick={()=>{
                loginbutton==="Login" ? setLoginbutton("Logout"): setLoginbutton("Login");
              }}
            
            >Log in</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;
 