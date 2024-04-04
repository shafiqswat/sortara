/** @format */
"use client";
import React from "react";
import Footer from "@/components/Footer";
import style from "../../../style/confirmphonenumber.module.css";
import globalStyle from "../../../style/global.module.css";
import { Form, Input } from "antd";
import SignUpValidationButton from "@/components/SignUpValidationButton";
import SignUpFormHeading from "@/components/SignUpFormHeading";

const ForgotPassword: React.FC = () => {
  const handleSubmit = () => {
    console.log("Password is correct. Proceed with form submission.");
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
        <SignUpFormHeading headingText='Forgot password?' />
        <p className={style.codePara}>
          Enter email or phone number associated to your account
        </p>
        <Input
          id='confirmInput'
          className={style.confirmInput}
          placeholder='Enter email or phone number'
          type='email'
        />
        <SignUpValidationButton
          onClick={handleClick}
          ButtonText='Submit'
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

export default ForgotPassword;
