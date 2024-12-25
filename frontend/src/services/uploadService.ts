import axios from "axios";

const uploadFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file); // Dodanie pliku do FormData

        const response = await axios.post('http://localhost:8000/api/lps/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('File uploaded successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export default uploadFile;
