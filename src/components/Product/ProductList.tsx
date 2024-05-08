/** @format */
"use client";
import SortListItemInput from "@/components/Sorting/SortListItemInput";
import YourList from "@/components/Product/YourList";
import YourListIcon from "@/components/Sorting/yourListIcon";
import style from "../../../style/Pages/myList.module.css";
import WalkthroughSortButton from "@/components/Walkthrough/WalkthroughSortButton";
import { useState } from "react";
import SparkleContext from "@/context/sparkleContext";

const ProductList: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);
  const handleSparkle = () => {
    setActive(!active);
  };
  return (
    <>
      <SparkleContext.Provider value={{ handleSparkle }}>
        <div className={style.container}>
          <div className={style.contentContainer}>
            <YourListIcon />
            <YourList />
            {active && (
              <div className='mt-5'>
                <SortListItemInput />
              </div>
            )}
            {!active && (
              <div className='mt-5 d-flex justify-content-between'>
                <WalkthroughSortButton ButtonText='Sort items' />
                <WalkthroughSortButton ButtonText='Add Items' />
              </div>
            )}
          </div>
        </div>
      </SparkleContext.Provider>
    </>
  );
};
export default ProductList;
