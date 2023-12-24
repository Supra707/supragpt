import React from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const Metadata = {
  title: "SupraGpt-Support page",
  description: "This is Support page for SupraGpt",
  // other metadata
};

const SupportPage = () => {
  return (
    <>
    <Header/>
    <div className="pb-20 pt-40">

      <Contact />
    </div>
    <Footer/>
    </>
  );
};

export default SupportPage;
