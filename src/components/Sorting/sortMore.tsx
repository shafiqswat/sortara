/** @format */
/** @format */
import React from "react";
import { Button, Drawer } from "antd";
import style from "../../../style/Sorting/sortMore.module.css";
import SortMoreContent from "./sortMoreContent";
interface Props {
  handleIndicator?: () => void;
  open?: boolean;
  handleDelete?: () => void;
  handleCopy?: () => void;
  handleMove?: () => void;
  handleMore?: () => void;
  handleCancel?: () => void;
  handleAccept?: () => void;
}

const SortMore = ({
  handleIndicator,
  open,
  handleCancel,
  handleAccept,
}: Props) => {
  return (
    <div className='editList'>
      <Drawer
        className={style.customDrawer}
        headerStyle={{ borderBottom: "0" }}
        title='Sort More'
        placement='bottom'
        closable={false}
        open={open}>
        <div className={style.container}>
          <div className={style.indicator}>
            <img
              src='images/BottomIndicator.svg'
              onClick={handleIndicator}
              alt='Indicator'
            />
          </div>
          <button className={style.retry}>Retry all</button>
          <p className={style.retailPara}>
            <strong> Retail Therapy Favorites</strong> will be expanded into the
            following lists:
          </p>
          <SortMoreContent retailHeading='Retail Therapy 1' />
          <SortMoreContent retailHeading='Retail Therapy 2' />
          <SortMoreContent retailHeading='Retail Therapy 3' />
          <div className={style.btnContainer}>
            <Button
              className={style.cancelBtn}
              onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              className={style.acceptBtn}
              onClick={handleAccept}>
              Accept all
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SortMore;
