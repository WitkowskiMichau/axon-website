import { mutate } from 'swr';

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

        await mutate('http://localhost:8000/api/lps/upload', data, false);
        console.log('Mutating SWR cache with new data:', data);


        return data;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export default uploadFile;