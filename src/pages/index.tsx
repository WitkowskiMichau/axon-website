// src/pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from "@/components/sections/Hero";
import React from "react";
import Tiles from "@/components/sections/Tiles";
import MovieSection from "@/components/sections/MovieSection";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";

const HomePage = () => {
    return (
        <div className="">
            <Header/>
            <Hero/>
            <Tiles/>
            <MovieSection/>
            <Pricing/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default HomePage;
