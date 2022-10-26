import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main
        style={{ minHeight: "calc(100vh - 64px - 188px)" }}
        className="mx-auto bg-white lg:max-w-3xl"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
