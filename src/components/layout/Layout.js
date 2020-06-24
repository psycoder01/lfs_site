import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import "../../fonts/index.css";

const Layout = ({ children }) => {
  return (
    <>
      <React.Fragment>
        <div className="animate__animated animate__fadeIn">
          <Header />
          <main className="text-gray-900">{children}</main>
          <Footer />
        </div>
      </React.Fragment>
    </>
  );
};

export default Layout;
