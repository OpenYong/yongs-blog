import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className="bg-neutral-100 min-h-screen mx-auto">{children}</main>
    </>
  );
};

export default Layout;
