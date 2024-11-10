import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DragAndDrop from "@/components/DragAndDrop";
import ProgressBar from "@/components/ProgressBar";

const Upload: React.FC = () => {
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const router = useRouter();

    const handleUploadProgress = () => {
        setUploadProgress(0);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (uploadProgress !== null && uploadProgress < 100) {
            interval = setInterval(() => {
                setUploadProgress((prevProgress) => {
                    if (prevProgress !== null && prevProgress < 100) {
                        return prevProgress + (100 / 5  );
                    } else {
                        clearInterval(interval);
                        return 100;
                    }
                });
            }, 1000);
        } else if (uploadProgress > 90) {
            router.push("/visualize");
        }

        return () => clearInterval(interval);
    }, [uploadProgress, router]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-darkBlue to-gray-800 text-white">
            <Header />
            <div className="container py-12 mx-auto w-1/2 px-4 sm:px-8 lg:px-16 h-40">
                <h1 className="text-5xl font-bold text-center text-primaryYellow mb-8 mt-28 font-russo">Upload Your Files</h1>
                <DragAndDrop onUploadProgress={handleUploadProgress} />
                {uploadProgress !== null && <ProgressBar progress={uploadProgress} />}
            </div>
            <Footer />
        </div>
    );
};

export default Upload;