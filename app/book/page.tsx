"use client";

import Header from "../header";
import TimelyButton from "./timelyButton";

export default function Book() {
  return (
    <>
      <Header />
      <div className="pageContent">
        <TimelyButton buttonId="book-page-button" className="flex justify-center py-10" />
      </div>
    </>
  );
}
