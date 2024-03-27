/** @format */
"use client";
import React, { useState } from "react";
import WalkthroughTrendy from "@/components/WalkthroughTrendy";
import globalStyle from "../../../style/global.module.css";
import style from "../../../style/Walkthrough.module.css";
import WalkthroughAsk from "@/components/WalkthrouhAsk";
import WalkthroughShare from "@/components/WalkthroughShare";
import WalkthroughAddItem from "@/components/WalkthroughAddItem";
import WalkthroughStarted from "@/components/WalkthroughStarted";

type CurrentStep = "ask" | "trendy" | "share" | "add" | "start";

const Walkthrough: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>("ask");

  const handleStepChange = (step: CurrentStep) => {
    setCurrentStep(step);
  };

  return (
    <div className={globalStyle.onboardingBackground}>
      {currentStep === "ask" && (
        <WalkthroughAsk onNextStep={handleStepChange} />
      )}
      {currentStep === "trendy" && (
        <WalkthroughTrendy onNextStep={handleStepChange} />
      )}
      {currentStep === "share" && (
        <WalkthroughShare onNextStep={handleStepChange} />
      )}
      {currentStep === "add" && (
        <WalkthroughAddItem onNextStep={handleStepChange} />
      )}
      {currentStep === "start" && <WalkthroughStarted />}
    </div>
  );
};

export default Walkthrough;
