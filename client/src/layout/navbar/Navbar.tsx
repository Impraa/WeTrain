import { useState, useEffect } from "react";
import NavItem from "../../components/nav-item/NavItem";
import "./Navbar.scss";
import { Twirl as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { UserBoxNav } from "../../components/user-box-nav/UserBoxNav";
import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";

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

  const user = useSelector(selectCurrentUser);

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
        <h1>
          <WeTrainLogo />
        </h1>
        <span className="hamburger">
          <Hamburger color={"#ff7043"} toggled={isOpen} toggle={setOpen} />
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
        {user ? (
          <>
            <UserBoxNav user={user} />
          </>
        ) : (
          AuthItems.map((item) => {
            return (
              <NavItem key={item.text} path={item.path}>
                {item.text}
              </NavItem>
            );
          })
        )}
      </div>
    </nav>
  );
}

export default Navbar;
