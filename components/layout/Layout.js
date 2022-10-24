import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className="mx-auto min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
