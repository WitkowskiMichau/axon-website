import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, Filler } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { colors } from "@/consts";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, Filler);

interface RevenueOverTimeData {
    date: string;
    leadSource: string;
    revenue: number;
    description: string;
}

interface RevenueTrendChartProps {
    data: RevenueOverTimeData[];
}

const RevenueTrendChart: React.FC<RevenueTrendChartProps> = ({ data }) => {
    useEffect(() => {
        import('chartjs-plugin-zoom').then((zoomPlugin) => {
            Chart.register(zoomPlugin.default);
        });
    }, []);

    const leadSources = Array.from(new Set(data.map(item => item.leadSource)));
    const dates = Array.from(new Set(data.map(item => item.date)));

    const getColor = (index: number) => colors[index % colors.length];

    const chartData = {
        labels: dates,
        datasets: leadSources.map((source, index) => {
            const sourceData = data.filter(item => item.leadSource === source);
            return {
                label: source,
                data: sourceData.map(item => ({ x: item.date, y: item.revenue, description: item.description })),
                borderColor: getColor(index),
                backgroundColor: getColor(index) + '80', // Adding transparency
                fill: false,
                tension: 0.4, // Adding tension to make the line smoother
                pointRadius: 3, // Larger point radius for better visibility
                pointStyle: 'circle',
                hidden: index !== 0, // Hide all datasets except the first one
            };
        }),
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    tooltipFormat: 'PP',
                },
                title: {
                    display: true,
                    text: 'Date',
                    color: '#D3D3D3', // Use a consistent light gray color
                },
                ticks: {
                    color: '#D3D3D3', // Use a consistent light gray color
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Revenue',
                    color: '#D3D3D3', // Use a consistent light gray color
                },
                ticks: {
                    color: '#D3D3D3', // Use a consistent light gray color
                },
            },
        },
        elements: {
            line: {
                borderJoinStyle: 'round', // Makes line connections rounded
            },
            point: {
                borderWidth: 2,
                hitRadius: 10,
                hoverRadius: 7,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' as const, // Corrected position type
                labels: {
                    textDecoration: 'none',
                    generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        return datasets.map((dataset, i) => ({
                            fontColor: dataset.borderColor,
                            text: dataset.label,
                            fillStyle: chart.isDatasetVisible(i) ? dataset.borderColor : 'transparent',
                            strokeStyle: dataset.borderColor,
                            lineWidth: 2,
                            hidden: !chart.isDatasetVisible(i),
                            datasetIndex: i,
                            textDecoration: 'none',
                        }));
                    },
                },
                onClick: (e, legendItem, legend) => {
                    const index = legendItem.datasetIndex;
                    const ci = legend.chart;
                    ci.setDatasetVisibility(index, !ci.isDatasetVisible(index));
                    ci.update();
                },
            },
            tooltip: {
                mode: 'index' as const, // Corrected mode type
                intersect: false,
                callbacks: {
                    label: (context) => {
                        const { raw } = context;
                        const { description } = raw as { description: string };
                        return `${raw.y}: ${description}`;
                    }
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'x',
                },
            },
        },
    };

    return (
        <div style={{ height: '400px' }}>
            <Line data={chartData} options={options as never} />
        </div>
    );
};

export default RevenueTrendChart;
