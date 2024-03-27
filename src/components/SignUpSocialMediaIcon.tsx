/** @format */
import style from "../../style/onboarding.module.css";
interface SignUpSocialMediaIconProps {
  iconPath: string;
  iconText: string;
}
export default function SignUpSocialMediaIcon({
  iconPath,
  iconText,
}: SignUpSocialMediaIconProps) {
  return (
    <div className={style.icon}>
      <img
        src={iconPath}
        alt='google'
      />
      <p>{iconText}</p>
    </div>
  );
}
