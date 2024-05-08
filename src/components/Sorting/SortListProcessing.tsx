/** @format */
import { useContext } from "react";
import style from "../../../style/Sorting/SortListProcessing.module.css";
import SortListContext from "@/context/SortListContext";
interface SortListProps {
  headingText?: string;
}

const SortListProcessing: React.FC<SortListProps> = ({ headingText }) => {
  const { handleAddClick, handleRefresh, handleRemove } =
    useContext(SortListContext);
  return (
    <>
      <div className={style.container}>
        <div className='d-flex'>
          <h2 className={style.heading}>{headingText}</h2>
          <div>
            <img
              src='images/SortListRefresh.svg'
              alt='SortListRefresh'
              onClick={handleRefresh}
            />
          </div>
        </div>
        <div className='d-flex'>
          <img
            src='images/check.svg'
            alt='Check'
            onClick={handleAddClick}
          />
          <img
            src='images/Exit.svg'
            alt='exit'
            className='me-3 ms-2'
            onClick={handleRemove}
          />
        </div>
      </div>
    </>
  );
};
export default SortListProcessing;
