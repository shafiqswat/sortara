/** @format */

import React, { forwardRef, useImperativeHandle } from "react";
import { message } from "antd";
import style from "../../../style/Sorting/SortMessage.module.css";
interface MessageProps {
  messageText?: string;
  btnText?: string;
  children?: string;
  handleConfirmBtn?: () => void;
  height?: string;
}

const SortMessage: React.ForwardRefRenderFunction<any, MessageProps> = (
  { messageText, btnText, children, height },
  ref
) => {
  const [messageApi, contextHolder] = message.useMessage();

  useImperativeHandle(ref, () => ({
    handleModal: () => {
      messageApi.open({
        content: (
          <div className={style.content}>
            <p className={style.messagePara}>{messageText}</p>
            <div>
              <button className={style.confirmBtn}>{btnText}</button>
              {children}
              <img
                src='/images/ExitBlack.svg'
                alt='ExitBlack'
                className={style.exitImage}
              />
            </div>
          </div>
        ),
        style: {
          marginTop: "7vh",
        },
      });
    },
  }));

  return <>{contextHolder}</>;
};

export default React.forwardRef(SortMessage);
