/* import { useState } from "react"; */
import NavItem from "../../components/nav-item/NavItem";
import "./Navbar.scss";

const NavItems = [
  {
    path: "/",
    text: "Home",
  },
];

const AuthItems = [
  {
    path: "/login",
    text: "Login",
  },
  {
    path: "/register",
    text: "Register",
  },
];

function Navbar() {
  /*   const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
}); */

  return (
    <div className="navbar">
      <h1>We Train logo</h1>
      <div className="nav-links">
        {NavItems.map((item) => {
          return <NavItem path={item.path}>{item.text}</NavItem>;
        })}
      </div>
      <div className="auth">
        {AuthItems.map((item) => {
          return <NavItem path={item.path}>{item.text}</NavItem>;
        })}
      </div>
    </div>
  );
}

export default Navbar;
