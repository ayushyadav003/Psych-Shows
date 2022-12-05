import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
