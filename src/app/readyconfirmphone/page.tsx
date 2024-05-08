/** @format */
import Footer from "@/components/Footer";
import style from "../../../style/Pages/readyConfirmPhone.module.css";
export default function readyConfirmPhone() {
  return (
    <div className={style.onboardingBackground}>
      <img
        src='/images/signUpLogo.svg'
        alt='logo'
      />
      <h2 className={style.verifyHeading}>You’re verified!</h2>
      <div>
        <Footer linkColor='#595959' />
      </div>
    </div>
  );
}
