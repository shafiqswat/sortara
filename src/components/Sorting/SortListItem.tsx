/** @format */

import React, { useState } from "react";
import { Card } from "antd";
import style from "../../../style/Sorting/SortListItem.module.css";
import SortListProcessing from "./SortListProcessing";

interface SortListItemProps {
  item: {
    id: number;
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
  handleModal?: () => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
}

// const handleClick = () => {
//   alert("hello");
// };
const SortListItem: React.FC<SortListItemProps> = ({
  item,
  onDragStart,
  onDragOver,
  onDrop,
  handleModal,
}) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <Card
      onClick={handleModal}
      className={style.cardContainer}
      style={{
        backgroundColor: item.cardBackground,
        marginTop: item.marginTop,
      }}
      draggable
      onDragStart={(e) => onDragStart(e, item.id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, item.id)}>
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
              className='me-1'
            />
            {item.firstPara}
          </p>
          <div className={style.imagesContainer}>
            <img
              src={item.restartImagePath}
              className='ms-2'
            />
            <img
              src={item.checkImagePath}
              className='ms-3'
            />
            <img
              src={item.exitImagePath}
              className='ms-2'
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
              className={style.reviewIcon}
              onClick={handleLike}
            />
            <p className={style.heartCount}>{count}</p>
            <img
              src={item.chatImagePath}
              className={style.reviewIcon}
              id={style.chat}
            />
            <p className={style.heartCount}>{item.chatCount}</p>
            <img
              className='ms-auto'
              id={style.share}
              src={item.shareImagePath}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SortListItem;
