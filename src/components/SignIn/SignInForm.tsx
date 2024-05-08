/** @format */

import React from "react";
import globalStyle from "../../../style/Common/global.module.css";
import style from "../../../style/SignIn/SignInForm.module.css";
import { Form, Input, Checkbox } from "antd";
import SignUpValidationButton from "../SignUp/SignUpValidationButton";
import SignUpSocialMediaIcon from "../SignUp/SignUpSocialMediaIcon";
import SignUpFormHeading from "../SignUp/SignUpFormHeading";

const SignInForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
  const handleClick = () => {};

  return (
    <Form
      name='normal_login'
      className={globalStyle.signUpForm}
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <div className='signInFormContainer'>
        <SignUpFormHeading headingText='Welcome back!' />
        <p className={style.accountPara}>Don’t have an account? Sign up!</p>
        <label
          className={globalStyle.label}
          htmlFor='email'>
          Email or phone number
        </label>
        <Form.Item
          name='Email'
          rules={[{ required: true, message: "Please input your Username!" }]}>
          <Input
            className={style.fullWidth}
            placeholder='Username'
            id='email'
          />
        </Form.Item>
        <label className={globalStyle.label}>Email or phone number</label>

        <Form.Item
          name='password'
          rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input
            className={style.fullWidth}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <div className='d-flex justify-content-between'>
          <Checkbox className={style.checkbox}>Remember me</Checkbox>
          <a
            className='login-form-forgot'
            href=''
            id={style.forgotPara}>
            Forgot password
          </a>
        </div>
        <SignUpValidationButton
          ButtonText='Sign-in'
          color='#595959'
          backgroundColor='#F2F2F7'
          border='2px solid #595959'
          onClick={handleClick}
        />
        <p
          className='text-center mt-3'
          id={style.continuePara}>
          Or continue with
        </p>
        <div className='d-flex justify-content-center align-items-center'>
          <SignUpSocialMediaIcon
            iconPath='/images/googleBlack.svg'
            iconText='Google'
          />
          <SignUpSocialMediaIcon
            iconPath='/images/appleBlack.svg'
            iconText='Apple'
          />
        </div>
      </div>
    </Form>
  );
};

export default SignInForm;
