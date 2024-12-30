export interface ExcelRow {
    LeadID: number;
    LeadSource: string;
    DealAmount: number;
    ConversionStatus: "Won" | "Lost";
    CompanyName?: string;
    Date?: string; // Opcjonalnie, jeśli nie ma daty w Excelu
    [key: string]: any; // Obsługa dodatkowych kolumn
}

export interface RevenueOverTimeItem {
    date: string;
    leadSource: string;
    revenue: number;
    description: string;
}

export type RevenueOverTimeData = RevenueOverTimeItem[];

export interface AverageSourceValue {
    [leadSource: string]: number; // Np. "Organic": 26.80
}

export interface PercentageOfOverallWins {
    [leadSource: string]: number; // Np. "Organic": 4.85
}

export interface ProcessedData {
    revenueOverTime: RevenueOverTimeData;
    averageSourceValue: AverageSourceValue;
    conversionEfficiency: PercentageOfOverallWins;
}

export interface Tips {
    tips: string[];
}
