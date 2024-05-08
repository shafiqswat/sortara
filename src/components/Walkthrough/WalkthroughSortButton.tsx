/** @format */
interface ButtonProps {
  ButtonText: string;
  buttonClick?: () => void;
}
import { Button } from "antd";
import style from "../../../style/Walkthrough/WalkthroughSortButton.module.css";

export default function WalkthroughSortButton({
  ButtonText,
  buttonClick,
}: ButtonProps) {
  return (
    <>
      <Button
        className={style.sortButton}
        type='primary'
        icon={<img src='/images/SuggestItem1.png' />}
        onClick={buttonClick}>
        {ButtonText}
      </Button>
    </>
  );
}
