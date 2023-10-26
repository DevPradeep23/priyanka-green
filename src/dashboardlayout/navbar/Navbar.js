import React, { useState, useEffect } from "react";
import Logo from "../../assest/Image/sunlogo.png"
const Navbar = () => {

const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleShadow = () => { 
      if (window.scrollY >= 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={`bg-white d-flex justify-content-between align-items-center shadow px-5 py-3 ${scrolled ? 'fixed-top': '' } `}>
      <div>
        <img src={Logo} height={"80px"} width={"80px"}/>
      </div>
      <div>
      <ul class=" nav d-flex gap-5 fs-5">
        <li className="nav-item">
        Home
        </li>
        <li className="nav-item">
        About Us
        </li>
        <li className="nav-item">
        Products
        </li>
        <li className="nav-item">
        Sustainability
        </li>
        <li className="nav-item">
        Contact
        </li>
        <li className="nav-item">
        Gallery
        </li>
       
      </ul>
      </div>
    </div>
  )
}

export default Navbar

// Home, About Us, , Sustainability, Contact)