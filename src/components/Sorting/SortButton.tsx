/** @format */

import { Button } from "antd";
import style from "../../../style/Sorting/SortButton.module.css";
interface SortButtonProps {
  btnText: string;
  btnImagePath: string;
  backgroundColor?: string;
  marginLeft?: string;
  color?: string;
  onClick?: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({
  btnText,
  btnImagePath,
  backgroundColor,
  marginLeft,
  color,
  onClick,
}) => {
  return (
    <Button
      className={style.sortButton}
      style={{
        backgroundColor: backgroundColor,
        marginLeft: marginLeft,
        color: color,
      }}
      onClick={onClick}>
      <img
        src={btnImagePath}
        alt='buttonIcon'
        className='me-2'
      />
      {btnText}
    </Button>
  );
};

export default SortButton;
