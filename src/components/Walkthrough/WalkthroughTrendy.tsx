/** @format */

import React from "react";
import WalkthroughTopItem from "./walkthorughTopItem";
import style from "../../../style/Walkthrough/WalkthroughTrendy.module.css";
import { Card, Collapse } from "antd";
import WalkthroughCard from "./WalkthroughCard"; // Correct import statement
import WalkthroughCrud from "./WalkthroughCrud";
import card from "../../../public/assets/card";
import WalkthroughSortButton from "./WalkthroughSortButton";
import SignUpValidationButton from "../SignUp/SignUpValidationButton";
import Footer from "../Footer";

interface Props {
  onNextStep: (step: "trendy" | "share" | "add" | "start") => void;
}

const WalkthroughTrendy: React.FC<Props> = ({ onNextStep }) => {
  const handleNextStep = () => {
    onNextStep("share");
  };
  const customIcon = (
    <img
      src='/images/arrowDown.svg'
      alt='Custom Icon'
      className={style.customIcon}
    />
  );
  const customIconArrowUp = (
    <img
      src='/images/arrowUp.svg'
      alt='arrowUp'
      className={style.customIcon}
    />
  );

  const text = (
    <>
      {card.slice(1, 2).map((post) => (
        <WalkthroughCard
          key={post.id}
          post={post}
        />
      ))}
      <div className={style.suggestContainer}>
        <p className={style.suggestPara}>
          <img
            src='/images/SuggestItem.png'
            alt='suggestItem'
          />
          List Suggestion
        </p>
        <WalkthroughCrud />
      </div>
    </>
  );

  return (
    <>
      <div className={style.trendyContainer}>
        <WalkthroughTopItem
          headingText='Our unique tools to help you get sorted!'
          paraText='Ability to smart sort or have AI generated item suggestions'
        />
        <Card style={{ width: 384 }}>
          {card.slice(0, 1).map((post) => (
            <WalkthroughCard
              key={post.id}
              post={post}
            />
          ))}
          <div className={style.crudContainer}>
            <WalkthroughCrud />
          </div>
        </Card>
        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? customIconArrowUp : customIcon
          }
          className={style.customCollapse}
          items={[
            {
              key: "1",
              children: text,
              extra: (
                <>
                  <h2 className={style.label}>New Fits</h2>
                </>
              ),
            },
          ]}
        />
        <div className={style.sortButtonContainer}>
          <WalkthroughSortButton ButtonText='Sort items' />
          <WalkthroughSortButton ButtonText='Add Items' />
        </div>

        <SignUpValidationButton
          ButtonText='Next'
          backgroundColor='#6000DA'
          color='white'
          border='2px solid white'
          onClick={handleNextStep}
        />
      </div>
      <div className={style.footerContainer}>
        <Footer linkColor='white' />
      </div>
    </>
  );
};

export default WalkthroughTrendy;
