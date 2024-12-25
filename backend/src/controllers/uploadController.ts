import { Request, Response } from 'express';
import XLSX from 'xlsx';
import fs from 'fs';

const uploadFile = (req: Request, res: any) => {
    try {
        // Sprawdzenie pliku
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const filePath = req.file.path;

        // Parsowanie Excela
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);

        console.log('Excel Data:', data);

        // Usunięcie pliku po przetworzeniu
        fs.unlinkSync(filePath);

        res.status(200).json({ message: 'File processed successfully', data });
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({ message: 'Error processing file', error });
    }
};

export default uploadFile;
