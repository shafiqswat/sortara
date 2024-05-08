/** @format */
import SignUpForm from "@/components/SignUp/SignUpForm";
// import style from "../../../style/SignUp.module.css";
import GlobalStyle from "../../../style/Common/global.module.css";
import Footer from "@/components/Footer";

export default function SignUp() {
  return (
    <section className={GlobalStyle.signUpSection}>
      <div className='text-center'>
        <img
          src='/images/signUpLogo.svg'
          alt='signUpLogo'
          className='my-5'
        />
      </div>
      <SignUpForm />
      <div className='my-5'>
        <Footer linkColor='#595959' />
      </div>
    </section>
  );
}
