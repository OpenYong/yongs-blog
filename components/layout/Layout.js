import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
