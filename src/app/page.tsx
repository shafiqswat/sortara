/** @format */
import style from "../../style/global.module.css";
import onboardingStyle from "../../style/onboarding.module.css";
import SignUpValidationButton from "@/components/SignUpValidationButton";
import SignUpSocialMediaIcon from "@/components/SignUpSocialMediaIcon";
import Footer from "@/components/Footer";
export default function Onboarding() {
  return (
    <section className={style.onboardingBackground}>
      <div className={onboardingStyle.parentOnboardingScreen}>
        <img
          src='/images/logo.png'
          alt='logo'
        />
        <img
          src='/images/onboardHeading.png'
          alt='Onboard Heading Image'
          className={onboardingStyle.sortHeading}
        />
        <p className={onboardingStyle.listsPara}>AI-Enhanced Lists</p>
        <SignUpValidationButton
          ButtonText='Create an account'
          color='#101036'
          backgroundColor='#CEE542'
          border='2px solid #101036'
        />
        <SignUpValidationButton
          ButtonText='Sign-in'
          color='white'
          backgroundColor='#6000DA'
          border='2px solid white'
        />
        <p className={onboardingStyle.continuePara}>or continue with</p>
        <div className={onboardingStyle.iconContainer}>
          <SignUpSocialMediaIcon
            iconText='Google'
            iconPath='/images/google.svg'
          />
          <SignUpSocialMediaIcon
            iconText='Apple'
            iconPath='/images/apple.svg'
          />
        </div>
      </div>
      <div className={onboardingStyle.footerContainer}>
        <Footer linkColor='white' />
      </div>
    </section>
  );
}
