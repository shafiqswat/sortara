/** @format */
import { useState } from "react";
import { Collapse } from "antd";
import style from "../../../style/Sorting/sortListCollapse.module.css";
import SortListItem from "./SortListItem";
import items from "../../../public/assets/sortListItem";
import sortListItem2 from "../../../public/assets/sortListItem2";
import SortButton from "./SortButton";
import SortListContext from "@/context/SortListContext";
import SearchContext from "@/context/SearchContext";

interface SortListCollapseProps {
  onCollapseChange: (isActive: boolean) => void;
  handleSortButtonClick: () => void;
  sortText: string;
  paraText?: string;
}

export default function SortListCollapse({
  onCollapseChange,
  handleSortButtonClick,
  sortText,
  paraText,
}: SortListCollapseProps) {
  const [isCollapseActive, setIsCollapseActive] = useState(false);
  const [isCollapseActivePara, setIsCollapseActivePara] = useState(false);
  const [isRemoveItem, setIsRemoveItem] = useState(false);
  const [isSortButtonVisible, setIsSortButtonVisible] = useState(true);
  const [sortItemsVisible, setSortItemsVisible] = useState(true);
  const [itemsState, setItemsState] = useState(items);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const handleCollapseChange = (keys: string | string[]) => {
    setIsCollapseActive(!!keys.length);
    onCollapseChange(!!keys.length);
    setIsRemoveItem(!isRemoveItem);
  };

  const handleSortButtonClickInternal = () => {
    setIsCollapseActivePara(!isCollapseActivePara);
    setIsRemoveItem(!isRemoveItem);
    setIsSortButtonVisible(!isSortButtonVisible);
    setSortItemsVisible(!sortItemsVisible);
    handleSortButtonClick();
  };

  const handleAddClick = () => {
    alert("abcd");
  };
  const handleCancel = () => {};
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

    const draggedIndex = itemsState.findIndex(
      (item) => item.id === draggedItem
    );
    const targetIndex = itemsState.findIndex((item) => item.id === id);

    const newItems = [...itemsState];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, removed);

    setItemsState(newItems);
    setDraggedItem(null);
  };

  const customIcon = (
    <img
      src='/images/arrowDown.svg'
      alt='Custom Icon'
      className={style.customIcon}
    />
  );
  const customIconArrowUp = (
    <img
      src='/images/arrowUp.svg'
      alt='arrowUp'
      className={style.customIcon}
    />
  );
  const text = (
    <>
      {sortItemsVisible && (
        <>
          {itemsState.map((item, index) => (
            <SortListItem
              key={index}
              item={item}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              // handleModal={handleModal}
            />
          ))}
        </>
      )}
      {!sortItemsVisible && (
        <>
          {sortListItem2.map((item, index) => (
            <SortListItem
              key={index}
              item={item}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              // handleModal={handleModal}
            />
          ))}
        </>
      )}
      {isCollapseActive && isSortButtonVisible && (
        <div className={style.sortButtonContainer}>
          <SortButton
            btnText='AI Sort'
            btnImagePath='images/SuggestItem.png'
            marginLeft='1em'
            onClick={handleSortButtonClickInternal}
          />
        </div>
      )}
      {isCollapseActivePara && (
        <div className={style.activeSortButtonContainer}>
          <SortButton
            btnText='AI Sort'
            btnImagePath='images/AiSuggestItem.png'
            backgroundColor='#CEE542'
            color='#101036'
          />
        </div>
      )}
      {isCollapseActivePara && isCollapseActive && (
        <div className={style.tryParaContainer}>
          <p className={style.tryPara}>Try Again? Let's Sort This!</p>
          <p className={style.tryPara}>Undo</p>
        </div>
      )}
    </>
  );

  const para = <p className={style.itemPara}>{paraText}</p>;

  return (
    <SortListContext.Provider
      value={{ handleAddClick, handleCancel, handleRefresh, handleRemove }}>
      <Collapse
        className={style.customCollapse}
        activeKey={isCollapseActive ? ["1"] : []}
        onChange={handleCollapseChange}
        expandIcon={({ isActive }) =>
          isActive ? customIconArrowUp : customIcon
        }
        items={[
          {
            key: "1",
            children: text,
            extra: (
              <>
                {!isCollapseActive && (
                  <>
                    <h2 className={style.collapseLabel}>{sortText}</h2>
                    {para}
                  </>
                )}
                <div className='d-flex'>
                  <div>
                    {!isCollapseActivePara && isRemoveItem && (
                      <>
                        <h2 className={style.collapseLabel}>Sort this later</h2>
                        {para}
                      </>
                    )}
                  </div>
                </div>
                {isCollapseActivePara && isCollapseActive && (
                  <div className={style.tryContainer}></div>
                )}
              </>
            ),
          },
        ]}
      />
    </SortListContext.Provider>
  );
}
