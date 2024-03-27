/** @format */
import SignUpForm from "@/components/SignUpForm";
import style from "../../../style/SignUp.module.css";
import GlobalStyle from "../../../style/global.module.css";
import Footer from "@/components/Footer";

export default function SignUp() {
  return (
    <section className={style.signUpSection}>
      <div className={style.logoParent}>
        <img
          src='/images/signUpLogo.svg'
          alt='signUpLogo'
          className='my-5'
        />
      </div>
      <SignUpForm />
      <div className={GlobalStyle.footerContainer}>
        <Footer linkColor='#595959' />
      </div>
    </section>
  );
}
