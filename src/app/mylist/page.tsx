/** @format */
"use client";
import React, { useRef, useState } from "react";
import SortListItemInput from "@/components/Sorting/SortListItemInput";
import YourList from "@/components/Product/YourList";
import YourListIcon from "../../components/Sorting/yourListIcon";
import style from "../../../style/Pages/myList.module.css";
import WalkthroughSortButton from "@/components/Walkthrough/WalkthroughSortButton";
import SparkleContext from "@/context/sparkleContext";
import { Button } from "antd";
import SortListItem from "@/components/Sorting/SortListItem";
import suggestionItems from "../../../public/assets/suggestionItem";
import ListReview from "@/components/Sorting/listReview";
import SortListContext from "@/context/SortListContext";
import SortMessage from "@/components/Sorting/SortMessage";

export default function MyList() {
  const [sparkleActive, setSparkleActive] = useState(false);
  const [addItem, setAddItem] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestionItem, setSuggestionItem] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [items, setItems] = useState(suggestionItems);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleSparkle = () => {
    setSparkleActive(!sparkleActive);
  };

  const handleButtonClick = () => {
    setIsLoading(!isLoading);
    setAddItem(!addItem);
    setSuggestionItem(!suggestionItem);
    setTimeout(() => {
      setIsLoading(isLoading);
      setAddItem(addItem);
      setButtonActive(!buttonActive);
    }, 4000);
  };

  const handleAddClick = () => {};
  const sortMessageRefCancel = useRef<any>();
  const handleCancel = () => {
    alert("ksdnf");
    sortMessageRefCancel.current.handleModal();
  };
  const handleRefresh = () => {};
  const handleRemove = () => {};

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

  return (
    <SparkleContext.Provider value={{ handleSparkle }}>
      <SortListContext.Provider
        value={{
          handleAddClick,
          handleCancel,
          handleRefresh,
          handleRemove,
        }}>
        <div className={style.container}>
          <div className={style.contentContainer}>
            <SortMessage
              btnText='Undo'
              messageText='Refreshed “Aromatherapy diffuser with essential oils” suggestion.'
              ref={sortMessageRefCancel}
            />
            <YourListIcon selfCareHeading='Luxe Self-Care Retreat Essentials' />
            {!buttonActive && (
              <div className={style.tryParaContainer}>
                <p>Try Again? Let's Sort This!</p>
                <p>Undo</p>
              </div>
            )}
            <YourList />
            {suggestionItem && (
              <div className='m-3'>
                {items.map((item, index) => (
                  <SortListItem
                    item={item}
                    key={index}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  />
                ))}
              </div>
            )}
            {isLoading && (
              <Button className={style.generateBtn}>
                Generating suggestions...
              </Button>
            )}
            {addItem && (
              <>
                {sparkleActive ? (
                  <>
                    {buttonActive && (
                      <div className={style.buttonsContainer}>
                        <WalkthroughSortButton
                          ButtonText='Sort items'
                          buttonClick={handleButtonClick}
                        />
                        <WalkthroughSortButton ButtonText='Add Items' />
                      </div>
                    )}
                  </>
                ) : (
                  <div className={style.inputContainer}>
                    <SortListItemInput />
                  </div>
                )}
              </>
            )}
            {!addItem && (
              <div className='p-3'>
                <Button className={style.changeBtn}>I change my mind</Button>
              </div>
            )}
            {!buttonActive && (
              <div className={style.reviewContainer}>
                <ListReview />
              </div>
            )}
          </div>
        </div>
      </SortListContext.Provider>
    </SparkleContext.Provider>
  );
}
