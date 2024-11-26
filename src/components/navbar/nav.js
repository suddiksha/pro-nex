import Logo from "../../assests/img/logo.png";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import "../../assests/css/nav.css";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from "react-responsive";
function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        {isTabletOrMobile && (
          <button className="menu-button" onClick={toggleDropdown}>
            <MenuIcon className="menu" />
          </button>
        )}
        <a className="navbar-brand text-center" href="/">
          <img src={Logo} alt="" className="d-inline-block logo align-text-top" />
        </a>

        <AnimatePresence>
          {showDropdown && isTabletOrMobile && (
            <motion.div className="dropdown"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}>
              <div className="content">
                <a href="/product">PRODUCTS</a>
                <a href="/market">MARKETS</a>
                <a href="/cap">CAPABILITIES</a>
                <a href="/about">ABOUT US</a>
                <a href="/con">CONTACT US</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isTabletOrMobile && (
          <ul className="list-item pt-1">
            <li className="nav-item"><a href="/product">PRODUCTS</a></li>
            <li className="nav-item"><a href="/market">MARKETS</a></li>
            <li className="nav-item"><a href="/cap">CAPABILITIES</a></li>
            <li className="nav-item"><a href="/about">ABOUT US</a></li>
            <li className="nav-item " >
            <a href="/con">     <Button variant="contained" className="contactus_btn">CONTACT US</Button></a>
            </li>
            
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;