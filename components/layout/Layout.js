import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className="bg-white min-h-screen mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
