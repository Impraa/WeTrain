import { useState, useEffect } from "react";
import NavItem from "../../components/nav-item/NavItem";
import "./Navbar.scss";
import { Twirl as Hamburger } from "hamburger-react";

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
  const [isOpen, setOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);

  return (
    <nav
      className={
        isOpen || windowSize.width >= 768 ? "navbar opened" : "navbar closed"
      }
    >
      <div className="logo-hamburger">
        <h1>We Train logo</h1>
        <span className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </span>
      </div>
      <div className="nav-links">
        {NavItems.map((item) => {
          return (
            <NavItem key={item.text} path={item.path}>
              {item.text}
            </NavItem>
          );
        })}
      </div>
      <div className="auth">
        {AuthItems.map((item) => {
          return (
            <NavItem key={item.text} path={item.path}>
              {item.text}
            </NavItem>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
