import useSWR, { mutate } from 'swr';

const uploadFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:8000/api/lps/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Error uploading file');
        }

        const data = await response.json();
        console.log('File uploaded successfully:', data);

        // Mutate SWR cache with new data
        console.log('Mutating SWR cache with new data:', data);
        mutate('/api/data/', data, false);

        return data;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export default uploadFile;