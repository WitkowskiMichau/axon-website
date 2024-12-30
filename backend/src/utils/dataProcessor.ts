import _ from "lodash";
import { ExcelRow, ProcessedData, RevenueOverTimeItem } from "../types";
import {parseDate} from "./dateParser";

/**
 * Processes Excel data and converts it into a structured format for analysis.
 * @param data Array of ExcelRow containing parsed Excel data.
 * @returns ProcessedData containing revenue over time, average source value, and conversion efficiency.
 */
export const processExcelData = (data: ExcelRow[]): ProcessedData => {
    // Revenue Over Time Data
    const revenueOverTime: RevenueOverTimeItem[] = _(data)
        .filter((row: ExcelRow) => row["Conversion Status"] === "Won")
        .map((row: ExcelRow): RevenueOverTimeItem => ({
            date: parseDate(row.Date), // Use the universal date parser
            leadSource: row["Lead Source"],
            revenue: row["Deal Amount"],
            description: `Lead source: ${row["Lead Source"]}, Client: ${row["Company Size"] || "Unknown"}`
        }))
        .value();

    // Average Source Value
    const averageSourceValue: Record<string, number> = _(data)
        .filter((row: ExcelRow) => row["Conversion Status"] === "Won")
        .groupBy("Lead Source")
        .mapValues((group: ExcelRow[]) =>
            _.round(_.sumBy(group, "Deal Amount") / group.length, 2) // Average with rounding
        )
        .value();

    // Lead Source Conversion Efficiency
    const conversionEfficiency: Record<string, number> = _(data)
        .groupBy("Lead Source")
        .mapValues((group: ExcelRow[]) => {
            const wonCount = group.filter((row: ExcelRow) => row["Conversion Status"] === "Won").length;
            const totalCount = group.length;
            return _.round((wonCount / totalCount) * 100, 2); // Conversion rate in percentage
        })
        .value();

    return {
        revenueOverTime,
        averageSourceValue,
        conversionEfficiency,
    };
};
