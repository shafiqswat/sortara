/** @format */

import React from "react";
import { Collapse, Form, Input } from "antd";
import style from "../../style/WalkthroughAsk.module.css";
import SignUpValidationButton from "./SignUpValidationButton";
import Footer from "./Footer";
import WalkthroughTopItem from "./walkthorughTopItem";

interface Props {
  onNextStep: (step: "trendy" | "share" | "add" | "start") => void;
}

const WalkthroughAsk: React.FC<Props> = ({ onNextStep }) => {
  const handleNextStep = () => {
    onNextStep("trendy");
  };

  const text = (
    <ul className={style.menu}>
      <li>Birthday Cake</li>
      <li>Dessert Table</li>
      <li>Cupcakes</li>
      <li>Cookies</li>
      <li>
        Sweet Treats
        <img
          src='/images/restart.svg'
          alt='Restart'
          className={style.restart}
        />
        <img
          src='/images/check.svg'
          alt='checked'
          className='ms-3'
        />
        <img
          src='/images/exit.svg'
          alt='exit'
          className='ms-3'
        />
      </li>
    </ul>
  );

  return (
    <>
      <div className={style.logoParent}>
        <WalkthroughTopItem
          headingText='Our unique tools to help you get sorted!'
          paraText='With flexibility to change and update the AI’s responses'
        />
        <Collapse
          items={[
            {
              key: "1",
              label: "Cake and Treats",
              children: text,
            },
          ]}
        />

        <Form>
          <div className={style.askContainer}>
            <div className='askInputContainer'>
              <Input
                placeholder='Ask AI to help with your search'
                type='text'
                className={style.askInput}
                prefix={
                  <img
                    src='/images/searchIcon.svg'
                    style={{ fontSize: "1.5em" }}
                  />
                }
              />
            </div>
          </div>
          <div className={style.ValidationButtonContainer}>
            <div className={style.buttonContainer}>
              <SignUpValidationButton
                ButtonText='Next'
                color='#FFFFFF'
                backgroundColor='#6000DA'
                border='2px solid #FFFFFF'
                onClick={handleNextStep}
              />
            </div>
          </div>
        </Form>
      </div>
      <div className={style.footerContainer}>
        <Footer linkColor='white' />
      </div>
    </>
  );
};

export default WalkthroughAsk;
