import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, ChartOptions, ScriptableContext } from "chart.js/auto";

Chart.register(CategoryScale);

interface ChartContainerProps {
    data: { leadSource: string; value: number }[];
    label: string;
    chartType: "bar" | "line" | "pie" | "doughnut";
    chartOptions?: ChartOptions<"bar"> | ChartOptions<"line"> | ChartOptions<"pie"> | ChartOptions<"doughnut">;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data, label, chartType, chartOptions }) => {
    const labels = data.map((item) => item.leadSource);
    const values = data.map((item) => item.value);

    const gradient = (ctx: CanvasRenderingContext2D) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "#00BFFF");
        gradient.addColorStop(0.5, "#FF69B4");
        gradient.addColorStop(1, "#00BFFF");
        return gradient;
    };

    const barChartData = {
        labels,
        datasets: [
            {
                label,
                data: values,
                backgroundColor: (context: ScriptableContext<"bar">) => {
                    const chart = context.chart;
                    const { ctx } = chart;
                    return gradient(ctx);
                },
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
                borderRadius: 6,
                hoverBackgroundColor: (context: ScriptableContext<"bar">) => {
                    const chart = context.chart;
                    const { ctx } = chart;
                    return gradient(ctx);
                },
            },
        ],
    };

    const lineChartData = {
        labels,
        datasets: [
            {
                label,
                data: values,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const chart = context.chart;
                    const { ctx } = chart;
                    return gradient(ctx);
                },
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
                borderRadius: 6,
                hoverBackgroundColor: (context: ScriptableContext<"line">) => {
                    const chart = context.chart;
                    const { ctx } = chart;
                    return gradient(ctx);
                },
            },
        ],
    };

    const pieDoughnutChartData = {
        labels,
        datasets: [
            {
                label,
                data: values,
                backgroundColor: (context: ScriptableContext<"pie" | "doughnut">) => {
                    const chart = context.chart;
                    const { ctx } = chart;
                    return gradient(ctx);
                },
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
                borderRadius: 6,
                hoverBackgroundColor: (context: ScriptableContext<"pie" | "doughnut">) => {
                    const chart = context.chart;
                    const { ctx } = chart;
                    return gradient(ctx);
                },
            },
        ],
    };

    const defaultBarOptions: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
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
                    label: (context) => {
                        return `${context.raw}%`;
                    },
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
                    callback: (value) => {
                        return `${value}%`;
                    },
                },
            },
        },
    };

    const defaultLineOptions: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
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
                    label: (context) => {
                        return `${context.raw}%`;
                    },
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
                    callback: (value) => {
                        return `${value}%`;
                    },
                },
            },
        },
    };

    const defaultPieDoughnutOptions: ChartOptions<"pie" | "doughnut"> = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
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
                    label: (context) => {
                        return `${context.raw}%`;
                    },
                },
            },
        },
    };

    const barOptions = { ...defaultBarOptions, ...chartOptions } as ChartOptions<"bar">;
    const lineOptions = { ...defaultLineOptions, ...chartOptions } as ChartOptions<"line">;
    const pieDoughnutOptions = { ...defaultPieDoughnutOptions, ...chartOptions } as ChartOptions<"pie" | "doughnut">;

    const renderChart = () => {
        switch (chartType) {
            case "line":
                return <Line data={lineChartData} options={lineOptions} />;
            case "pie":
                return <Pie data={pieDoughnutChartData} options={pieDoughnutOptions} />;
            case "doughnut":
                return <Doughnut data={pieDoughnutChartData} options={pieDoughnutOptions} />;
            case "bar":
            default:
                return <Bar data={barChartData} options={barOptions} />;
        }
    };

    return <>{renderChart()}</>;
};

export default ChartContainer;