/** @format */
// import style from ".../../../style/Pages/onboarding.module.css";
import style from "../../../style/Pages/onboarding.module.css";
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
      <p className={style.iconPara}>{iconText}</p>
    </div>
  );
}
