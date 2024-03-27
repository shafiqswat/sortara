/** @format */
import style from "../../style/WalkthroughCrud.module.css";
export default function WalkthroughCrud() {
  return (
    <div className={style.crudContainer}>
      <img
        src='/images/restart.svg'
        alt='restart'
      />
      <img
        src='/images/check.svg'
        alt='check'
      />
      <img
        src='/images/exit.svg'
        alt='exit'
      />
    </div>
  );
}
