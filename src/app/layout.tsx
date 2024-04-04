/** @format */
"use client";
import React from "react";
// import type { Metadata } from "next";
import style from "../../style/global.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/Customization.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

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
      </head>
      <body className={style.body}>
        <div>
          {showHeader && <Header currentPath={currentPath} />}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
