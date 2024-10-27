// src/components/DragAndDrop.tsx
import React from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop: React.FC = () => {
    const onDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        // Handle file upload logic here
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
        </div>
    );
};

export default DragAndDrop;