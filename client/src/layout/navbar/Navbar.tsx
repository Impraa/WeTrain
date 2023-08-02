import NavItem from "../../components/nav-item/NavItem";
import "./Navbar.scss";

const NavItems = [
  {
    path: "/",
    text: "Home",
  },
];

function Navbar() {
  return (
    <div className="navbar">
      {NavItems.map((item) => {
        return <NavItem path={item.path}>{item.text}</NavItem>;
      })}
    </div>
  );
}

export default Navbar;
