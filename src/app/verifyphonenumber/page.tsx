/** @format */
"use client";
import React from "react";
import Footer from "@/components/Footer";
import style from "../../../style/Pages/confirmphonenumber.module.css";
import globalStyle from "../../../style/Common/global.module.css";
import { Form, Input } from "antd";
import SignUpValidationButton from "@/components/SignUp/SignUpValidationButton";
import { useState, useEffect } from "react";
import SignUpFormHeading from "@/components/SignUp/SignUpFormHeading";

const VerifyPhoneNumber: React.FC = () => {
  const [showResendLink, setShowResendLink] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const MAX_ATTEMPTS = 5;
  useEffect(() => {
    if (!showResendLink) {
      const input = document.getElementById("confirmInput") as HTMLInputElement;
      input.focus();
    }
  }, [showResendLink]);

  const handleResendClick = () => {
    setShowResendLink(false);
    setInputValue("");
    setAttemptCount(0);
  };

  const handleSubmit = () => {
    if (inputValue.length !== 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      console.log("Password is correct. Proceed with form submission.");
    }

    if (inputValue !== "123456") {
      setAttemptCount(attemptCount + 1);
    } else {
      setAttemptCount(0);
    }
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setPasswordError(false);
  };
  const handleClick = () => {};

  return (
    <section className={globalStyle.signUpSection}>
      <div className='text-center'>
        <img
          src='/images/signUpLogo.svg'
          alt='logo'
        />
      </div>
      <Form
        className={globalStyle.signUpForm}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: "441px" }}
        initialValues={{ remember: true }}
        autoComplete='off'
        onFinish={handleSubmit}>
        <SignUpFormHeading headingText='Phone Verification' />
        <p className={style.codePara}>
          Enter 6 digit code sent to +1 ***-***-1234
        </p>
        {passwordError && (
          <p className={style.error}>
            Invalid code, please try again or resend code
          </p>
        )}
        {attemptCount >= MAX_ATTEMPTS && (
          <p className={style.error}>
            Code expired. Please use the Resend Code link to get a new code.
          </p>
        )}
        <Input
          id='confirmInput'
          className={style.confirmInput}
          placeholder='000-000'
          type='number'
          maxLength={6}
          value={inputValue}
          onChange={handleInputChange}
        />
        {showResendLink ? (
          <div className={style.resendPara}>
            <a
              href='#'
              onClick={handleResendClick}>
              Resend Code
            </a>
          </div>
        ) : (
          <div className={style.resendPara}>
            <p>
              <img
                src='/images/resendCheck.svg'
                alt='resendCheck'
              />
              Code resent!
            </p>
          </div>
        )}
        <SignUpValidationButton
          onClick={handleClick}
          ButtonText='Confirm'
          color='#595959'
          border='1px solid #6d6d6d'
          backgroundColor='transparent'
        />
      </Form>
      <div className='my-5'>
        <Footer linkColor='#595959' />
      </div>
    </section>
  );
};

export default VerifyPhoneNumber;
