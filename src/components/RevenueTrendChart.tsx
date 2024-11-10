import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

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

    const colors = [
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF',
        '#33FFA1', '#FFA133', '#57FF33', '#5733FF', '#FF3357',
        '#33A1FF', '#A1FF33', '#FF5733', '#33FF57', '#3357FF',
        '#FF33A1', '#A133FF', '#33FFA1', '#FFA133', '#57FF33'
    ];

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
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Revenue',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' as const, // Corrected position type
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