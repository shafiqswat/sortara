/** @format */
/** @format */
import SignUpValidationButton from "@/components/SignUp/SignUpValidationButton";
import style from "../../../style/Walkthrough/WalkthroughStarted.module.css";

import Footer from "@/components/Footer";
export default function WalkthroughStarted() {
  const handleChange = () => {
    console.log("kd");
  };
  return (
    <div className={style.startedSection}>
      <div className={style.startedContainer}>
        <img
          src='/images/logo.png'
          alt='logo'
          className='mt-5'
        />
        <img
          src='/images/startedHeading.png'
          alt='start'
          className={style.startedHeading}
        />
        <div className='my-5'>
          <SignUpValidationButton
            ButtonText='Let’s get started!'
            color='white'
            border='2px solid white'
            backgroundColor='#6000DA'
            onClick={handleChange}
          />
        </div>
      </div>
      <div className={style.footerContainer}>
        <Footer linkColor='white' />
      </div>
    </div>
  );
}
