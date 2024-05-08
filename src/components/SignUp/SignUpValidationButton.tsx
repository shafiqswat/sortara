/** @format */

import style from "../../../style/SignUp/SignUpValidationButton.module.css";
interface SignUpValidationButtonProps {
  ButtonText?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  onClick?: () => void;
}

export default function SignUpValidationButton({
  ButtonText,
  color,
  backgroundColor,
  border,
  onClick,
}: SignUpValidationButtonProps) {
  const handleStyle = {
    color: color,
    backgroundColor: backgroundColor,
    border: border,
  };

  return (
    <button
      onClick={onClick}
      className={style.submitButtonCustomization}
      style={handleStyle}
      type='submit'>
      {ButtonText}
    </button>
  );
}
