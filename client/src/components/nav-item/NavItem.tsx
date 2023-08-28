import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";
import { NavItemProps } from "../../utils/Interfaces/components/PropsInterfaces";

const NavItem: React.FC<NavItemProps> = ({ path, children }) => {
  return (
    <Link className="nav-item" to={path}>
      {children}
    </Link>
  );
};

export default NavItem;
