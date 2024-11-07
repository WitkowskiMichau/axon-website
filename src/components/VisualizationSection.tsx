import React from "react";
import ChartContainer from "@/components/ChartContainer";
import { ChartOptions } from "chart.js";

interface VisualizationSectionProps {
    title: string;
    description: string;
    data: { leadSource: string; value: number }[];
    valueKey: string;
    label: string;
    chartType: "bar" | "line" | "pie" | "doughnut";
    chartOptions?: ChartOptions;
    unit?: string;
}

const VisualizationSection: React.FC<VisualizationSectionProps> = ({ title, description, data, valueKey, label, chartType, chartOptions, unit }) => {
    return (
        <div className="w-full md:w-1/2 p-4">
            <h3 className="text-3xl font-semibold text-primaryYellow mb-4">{title}</h3>
            <div className="h-80">
                {/*@ts-expect-error: Type incompatibility issue with ChartOptions*/}
                <ChartContainer data={data} valueKey={valueKey} label={label} chartType={chartType} chartOptions={chartOptions} unit={unit} />
            </div>
            <p className="text-lg text-gray-300 mt-4">{description}</p>
        </div>
    );
};

export default VisualizationSection;