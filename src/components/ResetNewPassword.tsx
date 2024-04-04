/** @format */
import React, { useState } from "react";
import globalStyle from "../../style/global.module.css";
import style from "../../style/confirmphonenumber.module.css";
import { Form, Input } from "antd";
import SignUpValidationButton from "@/components/SignUpValidationButton";
import SignUpFormHeading from "@/components/SignUpFormHeading";
import SignInNewPassword from "@/components/SignInNewPassword";

export const ResetNewPassword: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);
  const handleSubmit = () => {
    const password = document.getElementById("password") as HTMLInputElement;
    const confirmPassword = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;

    if (!password.value || !confirmPassword.value) {
      setError("Passwords do not match.");
    } else if (password.value !== confirmPassword.value) {
      setError("Passwords do not match.");
    } else {
      setError(null);
      setPasswordsMatch(true);
    }
  };

  const handleClick = () => {};

  return (
    <>
      {error && (
        <div
          style={{
            color: "#A80000",
            fontSize: "14",
            fontFamily: "DM Sans",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "6rem",
            marginBottom: "-7rem",
          }}>
          {error}
        </div>
      )}
      {passwordsMatch ? (
        <SignInNewPassword onFinish={handleSubmit} />
      ) : (
        <Form
          className={globalStyle.signUpForm}
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: "441px" }}
          autoComplete='off'
          onFinish={handleSubmit}>
          <SignUpFormHeading headingText='Reset password' />
          <h2 className={style.newCodePara}>New password</h2>
          <p className={style.codePara}>
            Help us keep your login safe, your password must contain at least 8
            characters and should include a combination of letters, numbers, and
            special characters (i.e !@$%).
          </p>
          <div>
            <Input
              id='password'
              className={style.confirmInput}
              placeholder='Enter new password'
              type='password'
            />
          </div>
          <div className='my-1'>
            <label
              htmlFor='confirmPassword'
              className={globalStyle.label}>
              Re-enter password
            </label>
            <Input
              id='confirmPassword'
              className={style.confirmInput}
              placeholder='Re-enter new password'
              type='password'
            />
          </div>
          <SignUpValidationButton
            onClick={handleClick}
            ButtonText='Update password'
            color='#595959'
            border='1px solid #6d6d6d'
            backgroundColor='transparent'
          />
        </Form>
      )}
    </>
  );
};
