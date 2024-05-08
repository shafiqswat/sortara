/** @format */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SortListItemInput from "@/components/Sorting/SortListItemInput";
import SortingPopup from "@/components/Sorting/sortingpopup";
import ListReview from "@/components/Sorting/listReview";
import SortingCollapseItem from "@/components/Sorting/sortingCollapseItem";
import style from "../../../style/Pages/searchengine.module.css";
import popupItems from "../../../public/assets/popup";
import popupSecond from "../../../public/assets/popupSecond";
import collapseItem from "../../../public/assets/collapseItem";

export default function SearchEngine() {
  const [showItem, setShowItem] = useState(true);
  const [addItem, setAddItem] = useState(false);
  const [item, setItem] = useState<string>("");
  const [popupActive, setPopupActive] = useState(false);
  const [isActiveCollapse, setIsActiveCollapse] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setShowItem(!showItem);
    setAddItem(!addItem);
    setTimeout(() => {
      setAddItem(addItem);
      setPopupActive(true);
      setIsActiveCollapse(!isActiveCollapse);
      setTimeout(() => {
        setPopupActive(false);
      }, 3000);
    }, 3000);
  };

  const handleSearchClick = () => {
    if (showItem) {
      setShowItem(!showItem);
    }
    setAddItem(!addItem);
    setTimeout(() => {
      setAddItem(addItem);
      setPopupActive(true);
      setIsActiveCollapse(!isActiveCollapse);
      setTimeout(() => {
        setPopupActive(false);
      }, 3000);
    }, 3000);
  };

  const handleExitClick = () => {
    router.back();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setItem(value);
    console.log(value);
  };

  return (
    <div className={style.container}>
      <div>
        <p
          className={style.exitPara}
          onClick={handleExitClick}
          style={{ cursor: "pointer" }}>
          Exit Ask AI
        </p>
        {addItem && (
          <div className={style.whiteMessageContainer}>
            <p className={style.generatingPara}>Generating ideas for {item}</p>
          </div>
        )}
        {showItem && (
          <>
            {popupItems.map((item, index) => (
              <SortingPopup
                key={index}
                items={item}
                handleClick={handleClick}
              />
            ))}
          </>
        )}
        {popupActive && (
          <>
            {popupSecond.map((item, index) => (
              <SortingPopup
                key={index}
                items={item}
              />
            ))}
          </>
        )}
      </div>
      <div className={style.collapseContainer}>
        {isActiveCollapse && (
          <>
            <h1 className={style.celebHeading}>
              Celebration Extravaganza: Birthday Bash Essentials
            </h1>
            <div className='d-flex justify-content-between'>
              <p className={style.tryPara}>Try Again? Let's Sort This!</p>
              <p className={style.tryPara}>Undo</p>
            </div>
            {collapseItem.map((item, index) => (
              <SortingCollapseItem
                key={index}
                item={item}
              />
            ))}
            <div className='my-5'>
              <ListReview />
            </div>
          </>
        )}
        <div className={style.inputContainer}>
          <SortListItemInput
            inputImagePath='/images/searchIcon.svg'
            placeholderText='Ask AI to help with your search'
            handleSearch={handleSearchClick}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
