import Header from "../Navbar/UserHeader";
import React from "react";
import Footer from "../Navbar/UserFooter";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <h1>{children}</h1>{" "}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
