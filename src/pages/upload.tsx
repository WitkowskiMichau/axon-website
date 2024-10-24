// src/pages/index.tsx
import Header from '../components/Header';
import React from "react";
import FileUpload from "@/components/sections/FileUpload";
import Footer from "@/components/Footer";

const Upload = () => {
    return (
        <div className="">
            <Header/>
            <FileUpload />
            <Footer/>
        </div>
    );
};

export default Upload;
