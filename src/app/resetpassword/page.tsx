/** @format */
"use client";
import { ResetNewPassword } from "@/components/ResetNewPassword";
import globalStyle from "../../../style/global.module.css";
import Footer from "@/components/Footer";
import SignInNewPassword from "@/components/SignInNewPassword";
import { useState } from "react";

const ResetPassword: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const onFinish = () => {
    setError("Email and password combination did not work.");
  };

  return (
    <section className={globalStyle.signUpSection}>
      <div className='text-center'>
        <img
          src='/images/signUpLogo.svg'
          alt='logo'
        />
      </div>
      {error && (
        <div
          style={{
            width: "390px",
            color: "#A80000",
            fontFamily: "DM Sans",
            marginBottom: "14px",
            fontWeight: "500",
            margin: "8rem auto -6rem auto",
            textAlign: "center",
          }}>
          {error}
        </div>
      )}
      <ResetNewPassword />
      {/* <SignInNewPassword onFinish={onFinish} /> */}
      <div className='my-5'>
        <Footer linkColor='#595959' />
      </div>
    </section>
  );
};

export default ResetPassword;
