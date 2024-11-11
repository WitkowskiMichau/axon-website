import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, ChartOptions } from "chart.js/auto";

Chart.register(CategoryScale);

interface ChartContainerProps {
    data: { leadSource: string; value: number }[];
    label: string;
    chartType: "bar" | "line" | "pie" | "doughnut";
    chartOptions?: ChartOptions<"bar"> | ChartOptions<"line"> | ChartOptions<"pie"> | ChartOptions<"doughnut">;
    unit?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data, label, chartType, chartOptions, unit = '' }) => {
    const labels = data.map((item) => item.leadSource);
    const values = data.map((item) => item.value);

    const barChartData = {
        labels,
        datasets: [
            {
                label,
                data: values,
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Light background color
                borderColor: "rgba(75, 192, 192, 1)", // Border color
                borderWidth: 2, // Border width
                hoverBackgroundColor: "rgba(75, 192, 192, 0.4)", // Background color on hover
                borderRadius: 6,
            },
        ],
    };

    const defaultBarOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
                labels: {
                    color: "#fff",
                    font: {
                        family: "'Russo One', sans-serif",
                        size: 14,
                    },
                },
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
                    size: 12,
                },
                padding: 10,
                cornerRadius: 4,
                callbacks: {
                    label: (context) => `${context.raw} ${unit}`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                    color: "#fff",
                    font: {
                        family: "'Russo One', sans-serif",
                        size: 12,
                    },
                    maxRotation: 15,
                    minRotation: 15,
                },
            },
            y: {
                grid: {
                    display: true,
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

    const renderChart = () => {
        switch (chartType) {
            case "bar":
                return <Bar data={barChartData} options={barOptions} />;
            default:
                return null;
        }
    };

    return (
        <div className="chart-container">
            <h2 className="text-2xl font-bold text-center text-primaryYellow mb-4">{label}</h2>
            {renderChart()}
        </div>
    );
};

export default ChartContainer;