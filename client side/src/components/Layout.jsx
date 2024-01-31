import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <div className="relative overflow-clip">
          <Header />
        </div>

        <div className="white-gradient " />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
