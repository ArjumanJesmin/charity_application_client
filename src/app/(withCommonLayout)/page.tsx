import HomeForm from "@/components/Table/HomeForm/HomeForm";
import FooterGrid from "@/components/shared/Footer/FooterGrid";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeForm />
      <FooterGrid />
    </>
  );
};

export default HomePage;
