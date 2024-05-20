/** @format */

import React from "react";
import style from "../../../style/Sorting/sortMore.module.css";
interface Props {
  retailHeading: string;
}
function SortMoreContent({ retailHeading }: Props) {
  return (
    <div className='d-flex justify-content-between mb-3'>
      <h2 className={style.retailHeading}>{retailHeading}</h2>
      <div className={style.iconContainer}>
        <img
          src='/images/restart.svg'
          alt='restart'
          className='ms-3'
        />
        <img
          src='/images/check.svg'
          alt='check'
          className='ms-3'
        />
        <img
          src='/images/exit.svg'
          alt='exit'
          className='ms-3'
        />
      </div>
    </div>
  );
}

export default SortMoreContent;
