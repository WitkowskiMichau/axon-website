import { useState } from "react";
import { useRouter } from "next/router";
import uploadFile from "@/services/uploadService";

const DragAndDrop = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            console.log("Please select a file before uploading!");
            return;
        }

        setUploading(true);

        try {
            await uploadFile(file);
            console.log("File uploaded successfully!");
            router.push("/visualize");
        } catch (error) {
            console.log("An error occurred while uploading the file.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center border-dashed border-2 border-primaryYellow rounded-lg p-8 bg-gradient-to-r from-darkBlue to-gray-800 text-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold text-primaryYellow mb-4">Upload Your Data</h2>
            <p className="text-sm text-gray-300 mb-6 text-center">
                Drag and drop your file below, or click to select a file. Supported formats: <b>CSV, Excel</b>.
            </p>
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`w-full h-40 flex items-center justify-center ${
                    isDragging ? "bg-yellow-600 border-yellow-400" : "bg-gray-700 border-gray-500"
                } border-dashed rounded-lg transition-colors duration-300`}
            >
                <p className="text-gray-300">{isDragging ? "Release to upload your file" : "Drag and drop a file here"}</p>
            </div>
            <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
            />
            <label
                htmlFor="file-upload"
                className="mt-4 text-primaryYellow underline cursor-pointer"
            >
                Select a file
            </label>
            {file && <p className="mt-2 text-sm text-gray-300">{file.name}</p>}
            <button
                onClick={handleUpload}
                className={`mt-6 px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
                    !file || uploading
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : "bg-primaryYellow text-darkBlue hover:bg-yellow-400"
                }`}
                disabled={!file || uploading}
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>
            <p className="text-sm text-gray-400 mt-4">Your data is secure and private.</p>
        </div>
    );
};

export default DragAndDrop;