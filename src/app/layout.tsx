/** @format */
"use client";
import React from "react";
// import type { Metadata } from "next";
import style from "../../style/Common/global.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/Common/Customization.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import SearchContext from "@/context/SearchContext";
// import { Provider } from "react-redux";
// import store from "@/redux/store";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const currentPath = usePathname();

  const showHeader = ![
    "/",
    "/signin",
    "/signup",
    "confirmphonenumber",
    "/walkthrough",
    "/verifyphoenumber",
    "/forgotpassword",
    "/resetpassword",
    "/readyconfirmphone",
    "/privacy",
    "/searchengine",
  ].includes(currentPath);

  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800;900&display=swap'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Recoleta:wght@400;500;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://unpkg.com/react-spring-bottom-sheet/dist/style.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={style.body}>
        {/* <Provider store={store}> */}

        <div>
          {showHeader && <Header currentPath={currentPath} />}
          <main>{children}</main>
        </div>
        {/* </Provider> */}
      </body>
    </html>
  );
};

export default RootLayout;
