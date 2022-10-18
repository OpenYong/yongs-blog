import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className="bg-white mx-auto px-4 ">{children}</main>
    </>
  );
};

export default Layout;
