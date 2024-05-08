/** @format */

import React from "react";
import { Collapse, Form, Input } from "antd";
import style from "../../../style/Walkthrough/WalkthroughAsk.module.css";
import SignUpValidationButton from "../SignUp/SignUpValidationButton";
import Footer from "../Footer";
import WalkthroughTopItem from "./walkthorughTopItem";
import SortingCollapseItem from "../Sorting/sortingCollapseItem";
import collapseItem from "../../../public/assets/collapseItem";
import collapseData from "../../../public/assets/collapsedata";

interface Props {
  onNextStep: (step: "trendy" | "share" | "add" | "start") => void;
}

const WalkthroughAsk: React.FC<Props> = ({ onNextStep }) => {
  const handleNextStep = () => {
    onNextStep("trendy");
  };

  return (
    <>
      <div className={style.logoParent}>
        <WalkthroughTopItem
          headingText='Our unique tools to help you get sorted!'
          paraText='With flexibility to change and update the AI’s responses'
        />
        {collapseData.map((item, index) => (
          <SortingCollapseItem
            key={index}
            item={item}
          />
        ))}
        {/* {collapseData.map((item, index) => {
          <SortingCollapseItem
            key={index}
            item={item}
          />;
        })} */}
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
