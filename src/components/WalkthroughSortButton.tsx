/** @format */
interface ButtonProps {
  ButtonText: string;
}
import { Button } from "antd";
import style from "../../style/WalkthroughSortButton.module.css";

export default function WalkthroughSortButton({ ButtonText }: ButtonProps) {
  return (
    <>
      <Button
        className={style.sortButton}
        type='primary'
        icon={<img src='/images/SuggestItem1.png' />}>
        {ButtonText}
      </Button>
    </>
  );
}
