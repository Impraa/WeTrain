import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";

const NavItem: React.FC<{ path: string; children: ReactNode }> = ({
  path,
  children,
}) => {
  return (
    <Link className="nav-item" to={path}>
      {children}
    </Link>
  );
};

export default NavItem;
