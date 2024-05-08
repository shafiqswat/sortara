/** @format */

import { useState } from "react";
import { Collapse } from "antd";
import style from "../../../style/Sorting/sortListCollapse.module.css";
import SortListItem from "./SortListItem";
import items from "../../../public/assets/sortListItem";
import sortListItem2 from "../../../public/assets/sortListItem2";
import SortButton from "./SortButton";
import SortListContext from "@/context/SortListContext";

interface SortListCollapseProps {
  onCollapseChange: (isActive: boolean) => void;
  handleSortButtonClick: () => void;
}

export default function SortListCollapse({
  onCollapseChange,
  handleSortButtonClick,
}: SortListCollapseProps) {
  const [isCollapseActive, setIsCollapseActive] = useState(false);
  const [isCollapseActivePara, setIsCollapseActivePara] = useState(false);
  const [isRemoveItem, setIsRemoveItem] = useState(false);
  const [isSortButtonVisible, setIsSortButtonVisible] = useState(true);
  const [sortItemsVisible, setSortItemsVisible] = useState(true);

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
  const handleAddClick = () => {};
  const handleCancel = () => {};
  const handleRefresh = () => {};
  const handleRemove = () => {};
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
          {items.map((item, index) => (
            <SortListItem
              key={index}
              item={item}
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

  const para = <p className={style.itemPara}>4 items</p>;

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
                    <h2 className={style.collapseLabel}>Sort this later</h2>
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
