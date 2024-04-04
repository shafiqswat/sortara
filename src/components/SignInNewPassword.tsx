/** @format */

import React from "react";
import globalStyle from "../../style/global.module.css";
import style from "../../style/SignInNewPass.module.css";
import { Form, Input, Checkbox } from "antd";
import SignUpValidationButton from "./SignUpValidationButton";
import SignUpFormHeading from "./SignUpFormHeading";

const SignInNewPassword = ({
  onFinish,
}: {
  onFinish: (values: any) => void;
}) => {
  const handleClick = () => {};

  return (
    <Form
      name='normal_login'
      className={globalStyle.signUpForm}
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <div>
        <SignUpFormHeading headingText='Sign in with new password' />
        <label
          className={globalStyle.label}
          htmlFor='email'>
          Email or phone number
        </label>
        <Input
          type='text'
          className={style.fullWidth}
          placeholder='Enter email address or phone number'
          id='email'
        />

        <label className={globalStyle.label}>Email or phone number</label>

        <Input
          className={style.fullWidth}
          type='password'
          placeholder='Enter password'
        />

        <div className='d-flex justify-content-between my-3'>
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
      </div>
    </Form>
  );
};

export default SignInNewPassword;
