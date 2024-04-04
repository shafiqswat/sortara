/** @format */
"use client";
import SignInForm from "@/components/SignInForm";
import globalStyle from "../../../style/global.module.css";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);

  const onFinish = () => {
    setError("The username or password doesn't seem to match our records.");
  };

  return (
    <div className={globalStyle.signUpSection}>
      <div className='text-center'>
        <img
          src='/images/signUpLogo.svg'
          alt='signUpLogo'
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
            margin: "auto",
            textAlign: "center",
          }}>
          {error}
        </div>
      )}
      <SignInForm onFinish={onFinish} />
      <Footer linkColor='#595959' />
    </div>
  );
}
