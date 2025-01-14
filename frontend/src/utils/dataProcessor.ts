import {ProcessedData} from "@/types/types";

export function processExcelData(data: any[]): ProcessedData {
    return {
        rows: data.length,
        columns: Object.keys(data[0] || {}).length,
    };
}
