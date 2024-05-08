/** @format */
"use client";
import React, { useState } from "react";
import { Card } from "antd";
import style from "../../../style/Sorting/SortListItem.module.css";
import SortListProcessing from "./SortListProcessing";

interface SortListItemProps {
  item: {
    sortListItemImagePath: string;
    sortListItemHeading: string;
    firstPara?: string;
    sortParaImagePath?: string;
    sortParaColor?: string;
    restartImagePath?: string;
    checkImagePath?: string;
    exitImagePath?: string;
    secondPara?: string;
    HeartImagePath?: string;
    chatImagePath?: string;
    shareImagePath?: string;
    chatCount?: number;
    cardBackground?: string;
    width?: string;
    marginTop?: string;
    sortParaWidth?: string;
    sortParaFontWeight?: string;
    dollarParaText?: string;
    processingHeadingText?: string;
  };
}

const SortListItem: React.FC<SortListItemProps> = ({ item }) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };
  return (
    <Card
      className={style.cardContainer}
      style={{
        backgroundColor: item.cardBackground,
        marginTop: item.marginTop,
      }}>
      <div>
        {item.processingHeadingText && (
          <SortListProcessing headingText={item.processingHeadingText} />
        )}
      </div>
      <div className={style.cardContent}>
        <div>
          <img
            src={item.sortListItemImagePath}
            alt='sortListItem'
          />
        </div>
        <div className='ms-1'>
          <div className='d-flex justify-content-between'>
            <h3 className={style.sortListItemHeading}>
              {item.sortListItemHeading}
            </h3>
            <p
              className={style.sortListItemPara}
              style={{ fontWeight: item.sortParaFontWeight }}>
              {item.dollarParaText}
            </p>
          </div>
          <p
            className={style.sortListItemPara}
            style={{
              width: item.sortParaWidth,
              fontWeight: item.sortParaFontWeight,
              color: item.sortParaColor,
            }}>
            <img
              src={item.sortParaImagePath}
              // alt=''
              className='me-1'
            />
            {item.firstPara}
          </p>
          <div className={style.imagesContainer}>
            <img
              src={item.restartImagePath}
              className='ms-2'
              // alt=''
            />
            <img
              src={item.checkImagePath}
              className='ms-3'
              // alt=''
            />
            <img
              src={item.exitImagePath}
              className='ms-2'
              // alt=''
            />
          </div>
          <p
            className={style.sortListItemPara}
            style={{ fontWeight: item.sortParaFontWeight }}>
            {item.secondPara}
          </p>
          <div
            className={style.reviewContainer}
            style={{ width: item.width }}>
            <img
              src={item.HeartImagePath}
              // alt='heart'
              className={style.reviewIcon}
              onClick={handleLike}
            />
            {/* <p className={style.heartCount}>{count}</p> */}
            <img
              src={item.chatImagePath}
              // alt='chat'
              className={style.reviewIcon}
              id={style.chat}
            />
            <p className={style.heartCount}>{item.chatCount}</p>
            <img
              src={item.shareImagePath}
              // alt='share'
              className='ms-auto'
              id={style.share}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SortListItem;