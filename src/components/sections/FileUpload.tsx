// src/components/sections/FileUpload.tsx
import React, { useState } from "react";

const FileUpload: React.FC = () => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        }
    };

    return (
        <div className="container py-12 mx-auto w-3/4 px-4 sm:px-8 lg:px-16">
            <h2 className="text-4xl sm:text-3xl font-russo text-primaryYellow mb-8 text-center pb-10">Upload Excel File</h2>
            <p className="text-lg text-gray-300 mb-4 text-center">
                Please upload your Excel file using the button below. Once the file is uploaded, you will see the file name displayed.
            </p>
            <div className="flex flex-col items-center gap-4">
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                />
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-gradient-to-r from-pink-500 to-blue-500 text-white py-2 px-4 rounded-lg text-lg"
                >
                    Upload File
                </label>
                {fileName && <p className="text-lg text-gray-300 mt-4">Uploaded File: {fileName}</p>}
            </div>
        </div>
    );
};

export default FileUpload;