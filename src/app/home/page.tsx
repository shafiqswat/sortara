/** @format */

"use client";
import React, { useRef, useState } from "react";
import SortListCollapse from "@/components/Sorting/SortListCollapse";
import style from "../../../style/Pages/Home.module.css";
import SortListItem from "@/components/Sorting/SortListItem";
import SortListItemInput from "@/components/Sorting/SortListItemInput";
import sortItems from "../../../public/assets/sortListItem1";
import ListReview from "@/components/Sorting/listReview";
import SortMessage from "@/components/Sorting/SortMessage";
import SortListContext from "@/context/SortListContext";
import SearchContext from "@/context/SearchContext";
import { usePathname, useRouter } from "next/navigation";
import { Button, Input, Upload } from "antd";
import SortingPopup from "@/components/Sorting/sortingpopup";
import FormFinishContext from "@/context/FormFinishContext";

const Home: React.FC = () => {
  const [isCollapseActive, setIsCollapseActive] = useState<boolean>(false);
  const [removeItem, setRemoveItem] = useState(true);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleCollapseChange = (isActive: boolean) => {
    setIsCollapseActive(isActive);
  };
  const handleSortButtonClick = () => {
    setRemoveItem(!removeItem);
  };

  const sortMessageRefCancel = useRef<any>();
  const handleCancel = () => {
    sortMessageRefCancel.current.handleModal();
  };

  const handleRefresh = () => {};

  const sortMessageRefAdd = useRef<any>();

  const handleAddClick = () => {
    sortMessageRefAdd.current.handleModal();
  };
  const handleRemove = () => {
    sortMessageRefCancel.current.handleModal();
  };
  const router = useRouter();
  const handleSearchClick = () => {
    router.push("/searchengine");
  };

  const [image, setImage] = useState("/images/addItemsButton.svg");

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
    if (isDropDownOpen) {
      setImage("/images/addItemsButton.svg");
    } else {
      setImage("/images/cross.svg");
    }
  };
  const handleFocus = () => {
    router.push("/newlist");
  };
  return (
    <>
      <SortListContext.Provider
        value={{ handleAddClick, handleRefresh, handleRemove, handleCancel }}>
        <SearchContext.Provider value={{ handleSearchClick }}>
          <div className={style.container}>
            <div className={style.sortListItem}>
              {/* <SortingPopup />  show this when the form is submit successfully */}
              <SortMessage
                btnText='confirm'
                messageText='Are you sure? Going back will remove progress. '
                ref={sortMessageRefCancel}
              />
              <SortMessage
                btnText='Undo'
                messageText='Sorted “Self-Care Splurge” list'
                ref={sortMessageRefAdd}
              />
              <SortListCollapse
                onCollapseChange={handleCollapseChange}
                handleSortButtonClick={handleSortButtonClick}
              />
              {!isCollapseActive && (
                <div className={style.recentContainer}>
                  <p className={style.orderPara}>
                    Order: <span>Most Recent</span>
                  </p>
                  <img
                    src='/images/Edit.svg'
                    alt='edit'
                  />
                </div>
              )}
              {!isCollapseActive &&
                sortItems.map((item, index) => (
                  <SortListItem
                    key={index}
                    item={item}
                  />
                ))}
              <div className={style.inputContainer}>
                {removeItem && (
                  <div className={style.InputsContainer}>
                    <SortListItemInput
                      buttonImagePath={image}
                      inputImagePath='/images/sortListSearch.svg'
                      placeholderText='Search lists, items, etc...'
                      askImagePath='/images/SuggestItem.png'
                      askParaText='Ask AI to help with your search'
                      handleDropDown={handleDropDown}
                    />
                    {isDropDownOpen && (
                      <div className={style.dropDownContainer}>
                        <div className='addItemInputs'>
                          <div>
                            <Input
                              placeholder='New Sort'
                              type='text'
                              className={style.addItemInput}
                              onFocus={handleFocus}
                              prefix={<img src='/images/newListImage.svg' />}
                            />
                          </div>
                          <div>
                            <Upload>
                              <Button
                                icon={<img src='/images/CopyFile.svg' />}
                                className={style.uploadFile}>
                                New Item: URL
                              </Button>
                            </Upload>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {!removeItem && <ListReview />}
              </div>
            </div>
          </div>
        </SearchContext.Provider>
      </SortListContext.Provider>
    </>
  );
};
export default Home;
