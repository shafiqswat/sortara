/** @format */

import React, { useState } from "react";
import style from "../../../style/Sorting/EditSheet.module.css";
import { Button, Drawer } from "antd";
import EditContent from "./EditContent";
interface props {
  handleIndicator?: () => void;
  open?: boolean;
}
const EditSheet = ({ handleIndicator, open }: props) => {
  return (
    <>
      <Drawer
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
            />
          </div>
          <div className={style.delete}>
            <EditContent headingText='Delete' />
          </div>
          <EditContent headingText='Copy to another list' />
          <EditContent headingText='Move to new list' />
          <EditContent
            headingText='Sort More'
            iconPath='images/sortmore.svg'
          />
          <EditContent
            headingText='Sort Less'
            iconPath='images/sortmore.svg'
          />
        </div>
      </Drawer>
    </>
  );
};
export default EditSheet;
