/** @format */

import React from "react";
import { Button, Form, Input, Upload } from "antd";
import style from "../../../style/Walkthrough/WalkthroughAddItem.module.css";
import WalkthroughTopItem from "./walkthorughTopItem";
import SignUpValidationButton from "../SignUp/SignUpValidationButton";
import Footer from "../Footer";

interface Props {
  onNextStep: (step: "trendy" | "share" | "add" | "start") => void;
}

const WalkthroughAddItem: React.FC<Props> = ({ onNextStep }) => {
  const handleNextStep = () => {
    onNextStep("start");
  };

  return (
    <>
      <div className={style.addItemContainer}>
        <WalkthroughTopItem
          headingText='Manually add your items'
          paraText='Lorem ipsum dolor sit amet consectetur.'
        />
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete='off'>
          <div className='addItemInputs'>
            <Input
              placeholder='URL'
              type='url'
              className={style.addItemInput}
              prefix={<img src='/images/CopyFile.svg' />}
            />
            <Input
              placeholder='Custom Item'
              type='text'
              className={style.addItemInput}
              prefix={<img src='/images/customItem.svg' />}
            />
            <Input
              placeholder='Scan Barcode'
              type='text'
              className={style.addItemInput}
              prefix={<img src='/images/scanBarcode.svg' />}
            />
            <Upload>
              <Button
                icon={<img src='/images/CopyFile.svg' />}
                className={style.uploadFile}>
                Upload File
              </Button>
            </Upload>
            <img
              src='/images/cross.svg'
              className={style.customImage}
              alt='exit'
            />
          </div>
        </Form>
        <div className={style.buttonContainer}>
          <SignUpValidationButton
            ButtonText='Next'
            border='2px solid white'
            backgroundColor='#6000DA'
            color='white'
            onClick={handleNextStep}
          />
        </div>
      </div>
      <div className='my-5'>
        <Footer linkColor='white' />
      </div>
    </>
  );
};

export default WalkthroughAddItem;
