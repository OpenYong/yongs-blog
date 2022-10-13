import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
