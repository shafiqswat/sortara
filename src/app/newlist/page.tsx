/** @format */
"use client";
import YourListIcon from "@/components/Sorting/yourListIcon";
import React, { useState } from "react";
import style from "../../../style/Pages/newList.module.css";
import SortListCollapse from "@/components/Sorting/SortListCollapse";
import SortListItemInput from "@/components/Sorting/SortListItemInput";
function NewList() {
  const [isCollapseActive, setIsCollapseActive] = useState<boolean>(false);
  const [removeItem, setRemoveItem] = useState(true);
  const handleCollapseChange = (isActive: boolean) => {
    setIsCollapseActive(isActive);
  };
  const handleSortButtonClick = () => {
    setRemoveItem(!removeItem);
  };
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [image, setImage] = useState("/images/addItemsButton.svg");

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
    if (isDropDownOpen) {
      setImage("/images/addItemsButton.svg");
    } else {
      setImage("/images/cross.svg");
    }
  };
  return (
    <>
      <div className={style.container}>
        <div className='w-25 m-auto'>
          <YourListIcon
            selfCareHeading='Ideas for Dad’s birthday'
            publicText='Public'
          />
          <p className={style.para}>Let’s surprise him for his 59th bday!</p>
          <div>
            <img
              src='images/firstCollaborator.svg'
              className='ms-3'
              alt=''
            />
            <img
              src='images/firstCollaborator.svg'
              alt=''
              className='ms-2'
            />
          </div>
          <div className={style.reactionContainer}>
            <img
              src='/images/heartBlue.svg'
              alt='heartIcon'
              className=' ms-1 me-2'
            />
            <p>Share a reaction</p>
            <img
              src='/images/chatBlue.svg'
              alt='chatIcon'
              className='me-2 ms-4 '
            />
            <p>0 Comments</p>
          </div>
          <div className='px-1 mt-4'>
            <SortListCollapse
              onCollapseChange={handleCollapseChange}
              handleSortButtonClick={handleSortButtonClick}
              sortText='Destination areas for the surprise party'
            />
          </div>
          <div className={style.InputContainer}>
            <SortListItemInput
              buttonImagePath={image}
              inputImagePath='/images/sortListSearch.svg'
              placeholderText='Search lists, items, etc...'
              askImagePath='/images/SuggestItem.png'
              askParaText='Ask AI to help with your search'
              handleDropDown={handleDropDown}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewList;
