/** @format */
import React from "react";
import { Drawer } from "antd";
import EditContent from "./EditContent";
import style from "../../../style/Sorting/EditSheet.module.css";

interface Props {
  handleIndicator?: () => void;
  open?: boolean;
  handleDelete?: () => void;
  handleCopy?: () => void;
  handleMove?: () => void;
  handleMore?: () => void;
}

const EditSheet = ({
  handleIndicator,
  open,
  handleDelete,
  handleCopy,
  handleMove,
  handleMore,
}: Props) => {
  return (
    <div className='editList'>
      <Drawer
        className={style.customDrawer}
        headerStyle={{ borderBottom: "0" }}
        title='Edit'
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
          <div className={style.delete}>
            <EditContent
              headingText='Delete'
              handleClick={handleDelete}
            />
          </div>
          <EditContent
            headingText='Copy to another list'
            handleClick={handleCopy}
          />
          <EditContent
            headingText='Move to new list'
            handleClick={handleMove}
          />
          <EditContent
            headingText='Sort More'
            iconPath='images/sortmore.svg'
            handleClick={handleMore}
          />
          <EditContent
            headingText='Sort Less'
            iconPath='images/sortmore.svg'
            handleClick={handleMore}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default EditSheet;
