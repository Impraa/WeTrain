import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavItem: React.FC<{ path: string; children: ReactNode }> = ({
  path,
  children,
}) => {
  return <Link to={path}>{children}</Link>;
};

export default NavItem;
