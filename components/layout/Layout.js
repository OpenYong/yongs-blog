import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className="bg-neutral-50 min-h-screen mx-auto px-4 ">{children}</main>
    </>
  );
};

export default Layout;
