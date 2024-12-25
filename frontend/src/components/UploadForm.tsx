import React, { useState } from 'react';

const UploadComponent: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const [message, setMessage] = useState<string>('');
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            setMessage(''); // Clear previous messages
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            setFile(event.dataTransfer.files[0]);
            setMessage(''); // Clear previous messages
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select or drag a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            setIsUploading(true);
            setProgress(0);

            const response = await fetch('/api/lps', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const result = await response.json();
            setMessage(result.message || 'Upload successful!');
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Failed to upload file.');
        } finally {
            setIsUploading(false);
            setProgress(100);
        }
    };

    return (
        <div className="upload-container">
            <div
                className="upload-dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <p>Drag and drop a file here, or click to select one.</p>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                    className="file-input"
                />
            </div>
            {file && <p>Selected file: {file.name}</p>}
            <button
                onClick={handleUpload}
                disabled={isUploading}
                className="upload-button"
            >
                {isUploading ? 'Uploading...' : 'Upload'}
            </button>
            {isUploading && (
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default UploadComponent;
