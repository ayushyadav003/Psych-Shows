import React from "react";
import Header from "./header/Header";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default PageLayout;
