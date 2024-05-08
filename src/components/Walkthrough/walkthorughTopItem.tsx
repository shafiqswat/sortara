/** @format */
import style from "../../../style/Walkthrough/WalkthroughTopItem.module.css";
interface walkthroughTopItemProps {
  headingText: string;
  paraText: string;
}
export default function WalkthroughTopItem({
  headingText,
  paraText,
}: walkthroughTopItemProps) {
  return (
    <>
      <div className={style.walkthroughTopItemContainer}>
        <img
          src='/images/logo.png'
          alt='logo'
        />
        <h2 className={style.walkthroughHeading}>{headingText}</h2>
        <p className={style.flexibilityPara}>{paraText}</p>
      </div>
    </>
  );
}
