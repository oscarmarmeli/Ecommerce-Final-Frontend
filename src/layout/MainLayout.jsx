import React from "react";
import Navbar from "../components/navbar/Index";
import Footer from "../components/footer/Index";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;