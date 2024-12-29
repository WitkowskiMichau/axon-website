"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processExcelData = void 0;
const lodash_1 = __importDefault(require("lodash"));
const processExcelData = (data) => {
    // Revenue Over Time Data
    const revenueOverTime = (0, lodash_1.default)(data)
        .filter((row) => row.ConversionStatus === "Won") // Typ dla row
        .map((row) => ({
        date: row.Date || "Unknown Date",
        leadSource: row.LeadSource,
        revenue: row.DealAmount,
        description: `Lead source: ${row.LeadSource}, Client: ${row.CompanyName || "Unknown"}`,
    }))
        .value();
    // Average Source Value
    const averageSourceValue = (0, lodash_1.default)(data)
        .filter((row) => row.ConversionStatus === "Won")
        .groupBy((row) => row.LeadSource)
        .mapValues((group) => lodash_1.default.sumBy(group, (row) => row.DealAmount) / group.length)
        .value();
    // Lead Source Conversion Efficiency
    const conversionEfficiency = (0, lodash_1.default)(data)
        .groupBy((row) => row.LeadSource)
        .mapValues((group) => {
        const wonCount = group.filter((row) => row.ConversionStatus === "Won").length;
        const totalCount = group.length;
        return (wonCount / totalCount) * 100; // Konwersja na procenty
    })
        .value();
    return {
        revenueOverTime,
        averageSourceValue,
        conversionEfficiency,
    };
};
exports.processExcelData = processExcelData;
