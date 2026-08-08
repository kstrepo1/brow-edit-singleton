"use client";

import Script from "next/script";
import Header from "../header";
import TimelyButton from "./timelyButton";

export default function Book() {
  return (
    <>
      <Header/>
      <div className="pageContent">
        

        <Script id="timely-init" strategy="afterInteractive">
        {`
          new timelyButton("thebrowedit1", {
            style: "dark"
          });
        `}
        </Script>
      </div>
    </>
  );
}
