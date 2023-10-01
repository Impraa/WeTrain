import { useState } from "react";
import NavItem from "../nav-item/NavItem";
import "./EditProfileNav.scss";

export const EditProfileNav = () => {
  const NavItems = [
    { name: "Basic Info", path: "/edit-profile/" },
    { name: "Change Password", path: "/edit-profile/change-password" },
  ];

  const [active, setActive] = useState<string>("Basic Info");

  return (
    <div className="edit-profile-nav">
      <h2>{active}</h2>
      {NavItems.map((item) => {
        return (
          <NavItem
            key={item.name}
            onClick={() => {
              setActive(item.name);
            }}
            path={item.path}
          >
            {item.name}
          </NavItem>
        );
      })}
    </div>
  );
};

export default EditProfileNav;
