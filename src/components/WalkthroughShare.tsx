/** @format */

import React from "react";
import WalkthroughTopItem from "./walkthorughTopItem";
import style from "../../style/WalkthroughShare.module.css";
import SignUpValidationButton from "./SignUpValidationButton";
import Footer from "./Footer";

interface Props {
  onNextStep: (step: "trendy" | "share" | "add" | "start") => void;
}

const WalkthroughShare: React.FC<Props> = ({ onNextStep }) => {
  const handleNextStep = () => {
    onNextStep("add");
  };

  return (
    <>
      <div className={style.shareContent}>
        <WalkthroughTopItem
          headingText='Share your ideas to our apps'
          paraText='Lorem ipsum dolor sit amet consectetur.'
        />
      </div>
      <div className='text-center mt-5'>
        <img
          src='/images/AndroidOverview.svg'
          className='my-5'
        />
        <div className={style.nextButtonContainer}>
          <div className='mt-3'>
            <SignUpValidationButton
              ButtonText='Next'
              color='white'
              backgroundColor='#6000DA'
              border='2px solid white'
              onClick={handleNextStep}
            />
          </div>
        </div>
      </div>
      <div className='my-5'>
        <Footer linkColor='white' />
      </div>
    </>
  );
};

export default WalkthroughShare;
