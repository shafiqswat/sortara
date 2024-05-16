/** @format */

import React from "react";
import style from "../../../style/Sorting/EditContent.module.css";

interface Props {
  headingText: string;
  iconPath?: string;
}

function EditContent({ headingText, iconPath }: Props) {
  return (
    <div className='d-flex justify-content-between mb-4 mt-1 px-2'>
      <div className='d-flex '>
        <h2 className={style.heading}>{headingText}</h2>
        {iconPath && (
          <img
            src={iconPath}
            alt='sortMoreImage'
            className='ms-2'
          />
        )}
      </div>
      <img
        src='/images/RightArrow.svg'
        alt='rightArrow'
        className={style.cursorPointer}
      />
    </div>
  );
}

export default EditContent;
