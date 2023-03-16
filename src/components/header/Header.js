import { useState } from "react";
import "./header.css";
import Nav from "./nav/Nav";
import Menu from "./menu/Menu";

const Header = () => {
   const [active, setActive] = useState(false);

   const togleClick = () => {
      setActive(!active);
   };

   return (
      <div className="header">
         <Nav onclick={togleClick} />
         <Menu active={active} onclick={togleClick} />
         <div className="container">
            <div className="desc">
               <p className="desc-text">Immersive experiences that deliver</p>
            </div>
         </div>
      </div>
   );
};

export default Header;
