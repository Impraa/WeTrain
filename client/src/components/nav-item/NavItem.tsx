import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";
import { NavItemProps } from "../../utils/Interfaces/components/PropsInterfaces";

const NavItem: React.FC<NavItemProps> = ({
  path,
  children,
  onClick = () => {},
}) => {
  return (
    <Link className="nav-item" to={path} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavItem;
