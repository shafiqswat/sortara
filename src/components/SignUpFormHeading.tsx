/** @format */
import style from "../../style/SignUpFormHeading.module.css";
interface SignUpFormHeadingProps {
  headingText: string;
}
export default function SignUpFormHeading({
  headingText,
}: SignUpFormHeadingProps) {
  return (
    <>
      <h2 className={style.headingText}>{headingText}</h2>
    </>
  );
}
