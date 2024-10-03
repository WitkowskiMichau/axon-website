// src/pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from "@/components/Hero";
import React from "react";
import Tiles from "@/components/Tiles";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Tiles />
      <Footer />
    </div>
  );
};

export default HomePage;
