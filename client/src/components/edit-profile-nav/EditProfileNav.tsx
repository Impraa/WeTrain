import { useState } from "react";
import NavItem from "../nav-item/NavItem";
import "./EditProfileNav.scss";
import IconArrowDown from "../../assets/IconArrowDown";

export const EditProfileNav = () => {
  const NavItems = [
    { name: "Basic Info", path: "/edit-profile/" },
    { name: "Change Password", path: "/edit-profile/change-password" },
  ];

  const [active, setActive] = useState<string>("Basic Info");
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="edit-profile-nav">
      <div
        className="current-page"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <IconArrowDown className={isOpened ? "up" : ""} />
        <h2 className="title">{active}</h2>
      </div>
      <div className={isOpened ? "opened links" : "hidden links"}>
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
    </div>
  );
};

export default EditProfileNav;
