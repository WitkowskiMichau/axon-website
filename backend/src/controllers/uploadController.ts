import { Request, Response } from 'express';
import XLSX from 'xlsx';
import fs from 'fs';
import { ProcessedData } from "../types";
import { processExcelData } from "../utils/dataProcessor";

const uploadFile = (req: Request, res: Response): void => {
    try {
        // Sprawdzenie, czy plik został załadowany
        if (!req.file) {
            res.status(400).json({ message: 'No file uploaded' });
            return;
        }

        const filePath = req.file.path;

        // Parsowanie pliku Excel
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet) as any[]; // Nie można przewidzieć struktury, więc `any[]`

        // Usunięcie pliku po przetworzeniu
        fs.unlinkSync(filePath);

        if (!Array.isArray(data) || data.length === 0) {
            res.status(400).json({ message: 'Invalid or empty Excel data' });
            return;
        }

        const result: ProcessedData = processExcelData(data);

        // Logowanie wyników i zwrócenie do frontendu
        console.log("Processed data:", result.revenueOverTime);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({ message: 'Error processing file', error });
    }
};

export default uploadFile;
