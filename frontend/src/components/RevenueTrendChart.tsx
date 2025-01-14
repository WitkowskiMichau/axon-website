import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, Filler } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { colors } from "@/consts";
import CrosshairPlugin from 'chartjs-plugin-crosshair';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, Filler, CrosshairPlugin);

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
                backgroundColor: getColor(index) + '33', // Light background for the area (more transparency)
                fill: false,
                tension: 0.4, // Smooth out the lines
                pointRadius: 3,
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
                    color: '#D3D3D3',
                },
                ticks: {
                    color: '#D3D3D3',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Revenue',
                    color: '#D3D3D3',
                },
                ticks: {
                    color: '#D3D3D3',
                },
            },
        },
        elements: {
            line: {
                borderJoinStyle: 'round',
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
                position: 'top' as const, // Corrected position types
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
                mode: 'index' as const, // Corrected mode types
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
            crosshair: {
                line: {
                    color: 'lightgray', // Crosshair line color
                    width: 1,
                },
                sync: {
                    enabled: false,
                },
                zoom: {
                    enabled: false,
                },
                callbacks: {
                    beforeDraw: (chart) => {
                        const ctx = chart.ctx;
                        const chartArea = chart.chartArea;
                        ctx.save();
                        ctx.strokeStyle = 'lightgray';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(chartArea.left, chartArea.top);
                        ctx.lineTo(chartArea.left, chartArea.bottom);
                        ctx.stroke();
                        ctx.restore();
                    },
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