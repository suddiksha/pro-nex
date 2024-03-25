import "../../assests/css/nav.css";
import Logo from "../../assests/img/logo.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

function Nav() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
    <div className="bg">
      <nav className="navbar" >
       
      <li className="logo">
              <a href="/">
                <img src={Logo} alt="Logo" className="nexigo mt-2" />
              </a>
            </li>
            
        
           
            {!isTabletOrMobile && (
              <ul >
                <li>
                  <a href="/product">
                    <Button variant="contained" className="product-btn">
                      PRODUCTS
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="/market">
                    <Button variant="contained" className="product-btn">
                      MARKETS
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="/cap">
                    <Button variant="contained" className="product-btn">
                      CAPABILITIES
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <Button variant="contained" className="product-btn">
                      ABOUT US
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="/con">
                    <Button variant="contained" className="product-btn ">
                      CONTACT US
                    </Button>
                  </a>
                </li>
              </ul>
            )}
            {isTabletOrMobile && (
              <button className="menu-button mt-2" onClick={toggleDropdown}>
                <MenuIcon className="menu" />
              </button>
            )}
           
            </nav>
         
            </div>
      
      
    </>
  );
}

export default Nav;
