/** @format */
import React, { useState } from "react";
import style from "../../../style/Sorting/Collaborators.module.css";

interface Props {
  item: {
    id: number;
    imagePath: string;
    name: string;
    username: string;
    iconPath: string;
  };
  onClickIcon: (item: any, actionType: string) => void;
}

const Collaborators: React.FC<Props> = ({ item, onClickIcon }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleIconClick = (actionType: string) => {
    setIsAdded(!isAdded);
    onClickIcon(item, actionType);
  };

  return (
    <div
      className={`${style.container} ${isAdded ? style.clickedContainer : ""}`}>
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
        src={isAdded ? "/images/newListCross.svg" : "/images/ControlPoint.svg"}
        className={style.iconPath}
        alt='icon'
        onClick={() => handleIconClick(isAdded ? "remove" : "add")}
      />
    </div>
  );
};

export default Collaborators;
