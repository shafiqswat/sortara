/** @format */
"use client";
import { useState } from "react";
import SortListCollapse from "@/components/SortListCollapse";
import style from "../../../style/Home.module.css";
import SortListItem from "@/components/SortListItem";
import SortListItemInput from "@/components/SortListItemInput";
import sortItems from "../../../public/assets/sortListItem1";
export default function Home() {
  const [isCollapseActive, setIsCollapseActive] = useState<boolean>(false);

  const handleCollapseChange = (isActive: boolean) => {
    setIsCollapseActive(isActive);
  };

  return (
    <div className={style.container}>
      <div className={style.sortListItem}>
        <SortListCollapse onCollapseChange={handleCollapseChange} />
        <>
          <div className={style.recentContainer}>
            <p className={style.orderPara}>
              Order: <span>Most Recent</span>
            </p>
            <img
              src='/images/Edit.svg'
              alt='edit'
            />
          </div>
        </>
        {!isCollapseActive && (
          <>
            {sortItems.map((item, index) => (
              <SortListItem
                key={index}
                item={item}
              />
            ))}
          </>
        )}
        <div className={style.inputContainer}>
          <SortListItemInput />
        </div>
      </div>
    </div>
  );
}
