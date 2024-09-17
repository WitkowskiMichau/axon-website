'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';

export default function Home() {
  const [excelData, setExcelData] = useState<any[]>([]); // TypeScript type for data

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target?.result) return;

      const data = new Uint8Array(e.target.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      setExcelData(json);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h1>Upload Sales Data</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {excelData.length > 0 && (
        <div>
          <h2>Data Preview:</h2>
          <pre>{JSON.stringify(excelData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
