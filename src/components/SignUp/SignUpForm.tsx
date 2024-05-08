/** @format */
"use client";
import React, { useState } from "react";
import style from "../../../style/SignUp/SignUpForm.module.css";
import globalStyle from "../../../style/Common/global.module.css";
import { Form, FormProps, Input, Checkbox } from "antd";
import SignUpValidationButton from "./SignUpValidationButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SignUpFormHeading from "./SignUpFormHeading";

interface FieldType {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
  remember?: string;
  phone?: string;
  onClick?: () => void;
}

const SignUpForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const handleClick = () => {};
  return (
    <Form
      className={globalStyle.signUpForm}
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'>
      <SignUpFormHeading headingText='Create your account' />
      <label className={globalStyle.label}>Name</label>

      <div className={style.inputRow}>
        <div className={style.signUpFormContainer}></div>
        <Form.Item<FieldType> name='firstName'>
          <Input
            type='text'
            placeholder='Enter first name'
            className={style.fullWidth}
            id={style.firstName}
          />
        </Form.Item>
        <Form.Item<FieldType> name='lastName'>
          <Input
            type='text'
            placeholder='Enter last name'
            className={style.fullWidth}
            id={style.lastName}
          />
        </Form.Item>
      </div>
      <label className={style.label}>Username</label>

      <Form.Item<FieldType>
        name='userName'
        rules={[{ required: true, message: "username already taken" }]}>
        <Input
          type='text'
          placeholder='Create a username'
          className={style.fullWidth}
        />
      </Form.Item>
      <label className={style.label}>Email</label>

      <Form.Item<FieldType>
        name='email'
        rules={[{ required: true, message: "invalid email" }]}>
        <Input
          type='email'
          placeholder='Enter your email address'
          className={style.fullWidth}
        />
      </Form.Item>
      <label className={style.label}>Phone Number</label>
      <div>
        {!valid && <p className='invalidPhoneNumber'>invalid phone number</p>}
        <PhoneInput
          country={"us"}
          value={phoneNumber}
          onChange={handleChange}
          buttonStyle={{
            background: "none",
            border: "none",
          }}
          placeholder='+1 000-000-0000'
          inputProps={{
            required: false,
            placeholder: "+1 000-000-0000",
          }}
          inputStyle={{ width: "100%", height: "48px" }}
        />
      </div>
      <label className={style.label}>Password</label>
      <p className={style.passwordInstruction}>
        Your password must contain at least 8 characters and should include a
        combination of letters, numbers, and special characters (i.e !@$%).
      </p>
      <Form.Item<FieldType>
        name='password'
        rules={[{ required: true, message: "weak password" }]}>
        <Input
          type='password'
          placeholder='Enter password'
          className={style.fullWidth}
        />
      </Form.Item>
      <label className={style.label}>Re-type Password</label>
      <Form.Item<FieldType>
        name='repeatPassword'
        rules={[{ required: true, message: "passwords do not match" }]}>
        <Input
          type='password'
          placeholder='Re-type Password'
          className={style.fullWidth}
        />
      </Form.Item>
      <div className={style.wrapper}>
        <Checkbox className={style.checkbox}>
          I accept the <a href='#'>Trust and Terms </a> and
          <a href='#'> Legalities & Privacy Commitments</a>
        </Checkbox>
      </div>
      <SignUpValidationButton
        ButtonText='Create your account'
        color='#595959'
        backgroundColor='#F2F2F7'
        border='2px solid #595959'
        onClick={handleClick}
      />
    </Form>
  );
};

export default SignUpForm;
