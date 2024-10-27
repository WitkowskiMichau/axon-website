// src/components/DragAndDrop.tsx
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop: React.FC = () => {
    const [fileName, setFileName] = useState<string | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFileName(acceptedFiles[0].name);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={`border-2 border-dashed p-6 rounded-lg ${isDragActive ? 'border-primaryYellow' : 'border-gray-300'}`}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p className="text-primaryYellow">Drop the files here...</p> :
                    <p className="text-gray-300">Drag & drop some files here, or click to select files</p>
            }
            {fileName && <p className="text-lg text-gray-300 mt-4">Uploaded File: {fileName}</p>}
        </div>
    );
};

export default DragAndDrop;