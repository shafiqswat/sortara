/** @format */

import { useContext, useState } from "react";
import style from "../../../style/Sorting/YourListIcon.module.css";
import SparkleContext from "../../context/sparkleContext";

interface Props {
  selfCareHeading: string;
  publicText?: string;
}

export default function YourListIcon({ selfCareHeading, publicText }: Props) {
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
          <img
            src='/images/LeftArrowIcon.svg'
            alt='Left Arrow'
          />
        </div>
        <div className={style.imageContainer}>
          {publicText && <span className={style.public}>{publicText}</span>}
          {isActive ? (
            <img
              src='/images/suggestOutline.svg'
              onClick={internalHandleSparkle}
              alt='Suggest Outline'
            />
          ) : (
            <img
              src='/images/sparkleWithBg.svg'
              onClick={internalHandleSparkle}
              alt='Sparkle With Background'
            />
          )}

          <img
            src='/images/Edit.svg'
            className='ms-3'
            alt='Edit'
          />
          <img
            src='/images/Share.svg'
            className='ms-3'
            alt='Share'
          />
        </div>
      </div>
      <h1 className={style.productHeading}>{selfCareHeading}</h1>
    </>
  );
}
