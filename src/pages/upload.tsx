// src/pages/upload.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DragAndDrop from "@/components/DragAndDrop";

const Upload: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-darkBlue to-gray-800 text-white">
            <Header />
            <div className="container py-12 mx-auto w-3/4 px-4 sm:px-8 lg:px-16">
                <h1 className="text-5xl font-bold text-center text-primaryYellow mb-8 mt-28 font-russo">Upload Your Files</h1>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                    Drag and drop your files into the area below or click to select files.
                </p>
                <DragAndDrop />
            </div>
            <Footer />
        </div>
    );
};

export default Upload;