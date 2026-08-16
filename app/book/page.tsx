"use client";

import Header from "../header";

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
