/** @format */

// Collaborators.tsx

import React, { useState } from "react";
import style from "../../../style/Sorting/Collaborators.module.css";

interface Props {
  item: {
    imagePath: string;
    name: string;
    username: string;
    iconPath: string;
  };
  onClickIcon: () => void;
}

const Collaborators: React.FC<Props> = ({ item, onClickIcon }) => {
  const [iconPath, setIconPath] = useState(item.iconPath);
  const [isAdded, setIsAdded] = useState(false);
  const handleIconClick = () => {
    if (!isAdded) {
      setIconPath("/images/newListCross.svg");
      setIsAdded(true);
    } else {
      setIconPath("/images/ControlPoint.svg");
      setIsAdded(false);
    }
    onClickIcon();
  };

  return (
    <div
      className={`${style.container} ${isAdded ? style.clickedContainer : ""}`}
      onClick={handleIconClick}>
      <div className={style.userParent}>
        <img
          src={item.imagePath}
          alt='collaborators'
          className={style.userImage}
        />
        <div>
          <h2 className={style.username}>{item.name}</h2>
          <p className={style.userPara}>{item.username}</p>
        </div>
      </div>
      <img
        src={iconPath}
        className={style.iconPath}
        alt='icon'
        onClick={handleIconClick}
      />
    </div>
  );
};

export default Collaborators;