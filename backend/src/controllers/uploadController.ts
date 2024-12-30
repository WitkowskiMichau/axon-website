import { Request, Response } from 'express';
import XLSX from 'xlsx';
import fs from 'fs';
import { ProcessedData } from "../types";
import { processExcelData } from "../utils/dataProcessor";
import generateTips from "../services/tipService";

const uploadFile = async (req: Request, res: Response): Promise<void> => {
    try {
        // Sprawdzenie, czy plik został załadowany
        if (!req.file) {
            res.status(400).json({message: 'No file uploaded'});
            return;
        }
        console.log('Uploaded file:', req.file.originalname);
        const filePath = req.file.path;

        // Parsowanie pliku Excel
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet) as any[]; // Nie można przewidzieć struktury, więc `any[]`

        // Usunięcie pliku po przetworzeniu
        fs.unlinkSync(filePath);

        if (!Array.isArray(data) || data.length === 0) {
            res.status(400).json({message: 'Invalid or empty Excel data'});
            return;
        }

        const processedData: ProcessedData = processExcelData(data);
        const tips: string[] = await generateTips(processedData);
        const result: { processedData: ProcessedData, tips: string[] } = {
            processedData,
            tips,
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({message: 'Error processing file', error});
    }
};

export default uploadFile;
