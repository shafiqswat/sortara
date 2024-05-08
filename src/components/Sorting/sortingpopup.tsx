/** @format */
import React from "react";
import style from "../../../style/Sorting/sortingpopup.module.css";
interface PopupProps {
  items: {
    startParaText?: string;
    endParaText?: string;
    startSpanText?: string;
    endSpanText?: string;
  };
  handleClick?: () => void;
}
export default function SortingPopup({ items, handleClick }: PopupProps) {
  return (
    <div className={style.messageContainer}>
      <p className={style.askPara}>
        {items.startParaText}
        <span
          className={style.askSpanText}
          onClick={handleClick}>
          {items.startSpanText}
        </span>
        {items.endParaText}
        <span
          className={style.askSpanText}
          onClick={handleClick}>
          {items.endSpanText}
        </span>
      </p>
      <img
        src='/images/exit.svg'
        className='ms-4'
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      />
    </div>
  );
}
