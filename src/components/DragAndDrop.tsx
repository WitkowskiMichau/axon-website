import React, { useState, useRef } from "react";

interface DragAndDropProps {
    onUploadProgress: () => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onUploadProgress }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            onUploadProgress();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            onUploadProgress();
        }
    };

    return (
        <div
            className={`border-4 border-dashed rounded-lg h-80 max-h-screen ${isDragging ? "border-primaryYellow" : "border-gray-400"} flex items-center justify-center`}
            onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <p className="text-center text-gray-300">Drag and drop your files here or click to select</p>
        </div>
    );
};

export default DragAndDrop;