/** @format */

import { Input } from "antd";
import style from "../../style/SortListItemInput.module.css";
export default function SortListItemInput() {
  return (
    <>
      <p className={style.askPara}>
        <img
          src='/images/SuggestItem.png'
          alt='suggestItem'
          className='m-2'
        />
        Ask AI to help with your search
      </p>
      <div className='sortListInputContainer'>
        <Input
          placeholder='Search lists, items, etc...'
          type='text'
          className={style.sortListInput}
          prefix={
            <img
              src='/images/sortListSearch.svg'
              style={{ fontSize: "1.5em" }}
              className='me-3'
            />
          }
        />
        <img
          src='/images/addItemsButton.svg'
          alt='button'
          className='ms-2'
        />
      </div>
    </>
  );
}
