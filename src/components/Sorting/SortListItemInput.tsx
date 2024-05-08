/** @format */

import { Input } from "antd";
import style from "../../../style/Sorting/SortListItemInput.module.css";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
interface SortListItemInputProps {
  inputImagePath?: string;
  buttonImagePath?: string;
  askImagePath?: string;
  askParaText?: string;
  placeholderText?: string;
  handleSearch?: () => void;
  handleDropDown?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SortListItemInput({
  inputImagePath,
  buttonImagePath,
  askImagePath,
  askParaText,
  placeholderText,
  handleSearch,
  handleChange,
  handleDropDown,
}: SortListItemInputProps) {
  const { handleSearchClick } = useContext(SearchContext);
  return (
    <>
      <p
        className={style.askPara}
        onClick={handleSearchClick}
        style={{ cursor: "pointer" }}>
        <img
          src={askImagePath}
          className='m-2'
        />
        {askParaText}
      </p>
      <div className='sortListInputContainer'>
        <Input
          placeholder={placeholderText}
          type='text'
          className={style.sortListInput}
          onPressEnter={handleSearch}
          onChange={handleChange}
          prefix={
            <img
              src={inputImagePath}
              style={{ fontSize: "1.5em", cursor: "pointer" }}
              className='me-3 '
              // onClick={handleSearch}
            />
          }
        />
        <img
          style={{ cursor: "pointer" }}
          src={buttonImagePath}
          className='ms-2'
          onClick={handleDropDown}
        />
      </div>
    </>
  );
}
