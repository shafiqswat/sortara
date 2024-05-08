/** @format */

import { useContext, useState } from "react";
import style from "../../../style/Sorting/YourListIcon.module.css";
import SparkleContext from "../../context/sparkleContext";

export default function YourListIcon() {
  const [isActive, setIsActive] = useState(true);
  const { handleSparkle } = useContext(SparkleContext);

  const internalHandleSparkle = () => {
    setIsActive(!isActive);
    handleSparkle();
  };

  return (
    <>
      <div className='d-flex justify-content-between p-3'>
        <div className={style.imageContainer}>
          <img src='/images/LeftArrowIcon.svg' />
        </div>
        <div className={style.imageContainer}>
          {isActive ? (
            <img
              src='/images/suggestOutline.svg'
              onClick={internalHandleSparkle} // Call internalHandleSparkle here
            />
          ) : (
            <img
              src='/images/sparkleWithBg.svg'
              onClick={internalHandleSparkle} // Call internalHandleSparkle here
            />
          )}
          <img
            src='/images/Edit.svg'
            className='ms-3'
          />
          <img
            src='/images/Share.svg'
            className='ms-3'
          />
        </div>
      </div>
      <h1 className={style.productHeading}>
        Luxe Self-Care Retreat Essentials
      </h1>
    </>
  );
}
