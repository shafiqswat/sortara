/** @format */
import { useContext } from "react";
import { Button } from "antd";
import style from "../../../style/Sorting/ListReview.module.css";
import SearchContext from "@/context/SearchContext";
export default function ListReview() {
  const { handleCancel } = useContext(SearchContext);
  return (
    <>
      <div className={style.iconContainer}>
        <p className={style.ratePara}>Rate your results:</p>
        <img
          src='/images/listReviewLike.svg'
          alt='like Image'
          className='mx-2'
        />
        <img
          src='/images/listReviewUnlike.svg'
          alt='unlike Image'
        />
      </div>
      <Button
        className={style.cancelBtn}
        onClick={handleCancel}>
        Cancel
      </Button>
      <Button
        className={style.cancelBtn}
        id={style.acceptBtn}>
        Accept all suggestions
      </Button>
    </>
  );
}
