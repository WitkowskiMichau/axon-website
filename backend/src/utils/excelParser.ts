import * as xlsx from 'xlsx';

export const parseExcelFile = async (filePath: string) => {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    // Implement data transformation logic here
    return data;
};