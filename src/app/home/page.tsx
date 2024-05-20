/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import SortListCollapse from "@/components/Sorting/SortListCollapse";
import style from "../../../style/Pages/Home.module.css";
import SortListItem from "@/components/Sorting/SortListItem";
import SortListItemInput from "@/components/Sorting/SortListItemInput";
import sortItems from "../../../public/assets/sortListItem1";
import ListReview from "@/components/Sorting/listReview";
import SortMessage from "@/components/Sorting/SortMessage";
import SearchContext from "@/context/SearchContext";
import { useRouter } from "next/navigation";
import { Button, Input, Upload } from "antd";
import EditSheet from "@/components/Sorting/EditSheet";

const Home: React.FC = () => {
  const [items, setItems] = useState(sortItems);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [isCollapseActive, setIsCollapseActive] = useState<boolean>(false);
  const [removeItem, setRemoveItem] = useState(true);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const [render, setRender] = useState(false);
  const [openModel, setOpenModal] = useState(false);

  const handleCollapseChange = (isActive: boolean) => {
    setIsCollapseActive(isActive);
  };
  const handleSortButtonClick = () => {
    setRemoveItem(!removeItem);
  };

  const sortMessageRefCancel = useRef<any>();
  const handleRemove = () => {
    sortMessageRefCancel.current.handleModal();
  };
  const sortMessageRefresh = useRef<any>();
  const handleRefresh = () => {
    sortMessageRefresh.current.handleModal();
  };

  const sortMessageRefAdd = useRef<any>();

  const handleAddClick = () => {
    sortMessageRefAdd.current.handleModal();
  };
  const router = useRouter();
  const handleSearchClick = () => {
    router.push("/searchengine");
  };
  const handleCancel = () => {};
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
    router.push("/nestedlist");
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();

    if (draggedItem === null) return;

    const draggedIndex = items.findIndex((item) => item.id === draggedItem);
    const targetIndex = items.findIndex((item) => item.id === id);

    const newItems = [...items];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, removed);

    setItems(newItems);
    setDraggedItem(null);
  };
  const handleIndicator = () => {
    setOpenModal(false);
  };
  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <SearchContext.Provider
      value={{
        handleSearchClick,
        handleAddClick,
        handleCancel,
        handleRefresh,
        handleRemove,
      }}>
      <div className={style.container}>
        <div className={style.sortListItem}>
          <SortMessage
            btnText='confirm'
            messageText='Are you sure? Going back will remove progress. '
            ref={sortMessageRefCancel}
          />
          <SortMessage
            btnText='View list'
            messageText='Sorted “Self-Luxe Self-Care Retreat Essentials has been sorted to your lists Splurge” list'
            ref={sortMessageRefAdd}
          />

          <SortMessage
            btnText='Undo'
            messageText='Sorted “Self-Care Splurge” list'
            ref={sortMessageRefresh}
          />
          <SortListCollapse
            onCollapseChange={handleCollapseChange}
            handleSortButtonClick={handleSortButtonClick}
            sortText='Sort this later'
            paraText='4 items'
          />
          {!isCollapseActive && (
            <div className={style.recentContainer}>
              <p className={style.orderPara}>
                Order: <span className={style.mostRecent}>Most Recent</span>
              </p>
              <img
                src='/images/Edit.svg'
                alt='edit'
                onClick={() => {
                  router.push("/editlist");
                }}
              />
            </div>
          )}
          {!isCollapseActive &&
            items.map((item, index) => (
              <SortListItem
                key={index}
                item={item}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                handleModal={handleModal}
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
      <EditSheet
        handleIndicator={handleIndicator}
        open={openModel}
      />
    </SearchContext.Provider>
  );
};

export default Home;
