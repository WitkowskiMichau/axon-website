import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, ChartOptions } from "chart.js/auto";
import { colors } from "@/consts";

Chart.register(CategoryScale);

interface ChartContainerProps {
    data: { leadSource: string; value: number }[];
    label: string;
    chartType: "bar";
    chartOptions?: ChartOptions<"bar">;
    unit?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data, label, chartOptions, unit = '' }) => {
    const labels = data.map((item) => item.leadSource);
    const values = data.map((item) => item.value);

    const barChartData = {
        labels,
        datasets: [
            {
                label,
                data: values,
                backgroundColor: colors.map(color => color + '55'), // Light, transparent background
                borderColor: colors,
                borderWidth: 2,
                hoverBackgroundColor: colors.map(color => color + 'AA'), // Darker on hover
                borderRadius: 4,
                hoverBorderWidth: 3,
            },
        ],
    };

    const defaultBarOptions: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            crosshair: {
                line: {
                    color: 'transparent', // Crosshair line color
                    width: 1,
                },
            },
            legend: {
                display: false,
            },
            tooltip: {
                displayColors: false,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleFont: {
                    family: "'Russo One', sans-serif",
                    size: 14,
                    weight: "bold",
                },
                bodyFont: {
                    family: "'Russo One', sans-serif",
                    size: 11,
                },
                padding: 8,
                cornerRadius: 4,
                callbacks: {
                    label: (context) => `${context.raw} ${unit}`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#fff",
                    font: {
                        family: "'Russo One', sans-serif",
                        size: 12,
                    },
                },
            },
            y: {
                grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                    color: "#fff",
                    font: {
                        family: "'Russo One', sans-serif",
                        size: 12,
                    },
                    callback: (value) => `${value} ${unit}`,
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        },
    };

    const barOptions = { ...defaultBarOptions, ...chartOptions } as ChartOptions<"bar">;

    return (
        <div className="chart-container">
            <h2 className="text-2xl font-bold text-center text-primaryYellow mb-4">{label}</h2>
            <Bar data={barChartData} options={barOptions} />
        </div>
    );
};

export default ChartContainer;