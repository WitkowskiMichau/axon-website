import React, { useEffect, useState, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockData } from "@/data/MockData";

Chart.register(CategoryScale);

interface Lead {
    leadSource: string;
    dealStatus: string;
    dealAmount: number;
}

interface SegmentedData {
    [key: string]: Lead[];
}

interface VisualizationData {
    leadSource: string;
    totalRevenue?: number;
    conversionRate?: number;
}

const Visualize: React.FC = () => {
    const [visualizations, setVisualizations] = useState<{
        totalRevenueChart: JSX.Element;
        conversionRateChart: JSX.Element;
    } | null>(null);

    const processData = useCallback((data: Lead[]) => {
        const segmentedData = segmentLeadsBySource(data);
        const conversionRates = calculateConversionRates(segmentedData);
        const totalRevenue = calculateTotalRevenue(segmentedData);

        setVisualizations({
            totalRevenueChart: generateBarChart(totalRevenue, "totalRevenue"),
            conversionRateChart: generateBarChart(conversionRates, "conversionRate"),
        });
    }, []);

    useEffect(() => {
        processData(mockData);
    }, [processData]);

    const segmentLeadsBySource = (data: Lead[]): SegmentedData => {
        return data.reduce((acc: SegmentedData, lead: Lead) => {
            if (!acc[lead.leadSource]) {
                acc[lead.leadSource] = [];
            }
            acc[lead.leadSource].push(lead);
            return acc;
        }, {});
    };

    const calculateConversionRates = (data: SegmentedData): VisualizationData[] => {
        return Object.keys(data).map((source) => {
            const leads = data[source];
            const wonDeals = leads.filter((lead: Lead) => lead.dealStatus === "Won").length;
            const conversionRate = (wonDeals / leads.length) * 100;
            return { leadSource: source, conversionRate };
        });
    };

    const calculateTotalRevenue = (data: SegmentedData): VisualizationData[] => {
        return Object.keys(data).map((source) => {
            const leads = data[source];
            const totalRevenue = leads.reduce((sum: number, lead: Lead) => sum + (lead.dealStatus === "Won" ? lead.dealAmount : 0), 0);
            return { leadSource: source, totalRevenue };
        });
    };

    const generateBarChart = (data: VisualizationData[], valueKey: "totalRevenue" | "conversionRate"): JSX.Element => {
        const labels = data.map((item) => item.leadSource);
        const values = data.map((item) => item[valueKey] as number);

        const gradient = (ctx: CanvasRenderingContext2D) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#00BFFF"); // '90s-blue'
            gradient.addColorStop(1, "#FF69B4"); // '90s-pink'
            return gradient;
        };

        return (
            <Bar
                data={{
                    labels,
                    datasets: [
                        {
                            label: valueKey === "totalRevenue" ? "Total Revenue" : "Conversion Rate",
                            data: values,
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                const { ctx } = chart;
                                return gradient(ctx);
                            },
                            borderColor: "rgba(0, 0, 0, 0)", // Remove border
                            borderWidth: 0, // Set border width to 0
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false, // Remove legend
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: "#fff",
                            },
                        },
                        y: {
                            ticks: {
                                color: "#fff",
                            },
                        },
                    },
                }}
            />
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <Header />
            <div className="container py-12 mx-auto w-3/4 px-4 sm:px-8 lg:px-16">
                <h1 className="text-5xl font-bold text-center text-primaryYellow mb-8 mt-8">Data Visualization</h1>
                <h2 className="text-4xl sm:text-3xl font-russo text-primaryYellow mb-8 text-center pb-10">Visualize Mock Data</h2>
                <p className="text-lg text-gray-300 mb-8 text-center">
                    Welcome to the data visualization page. Here, you can see the total revenue and conversion rates segmented by lead source. This information helps you understand which lead sources are most profitable and effective.
                </p>
                {visualizations && (
                    <div className="mt-8">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-1/2 p-4">
                                <h3 className="text-2xl font-semibold text-primaryYellow mb-4">Total Revenue by Lead Source</h3>
                                {visualizations.totalRevenueChart}
                                <p className="text-lg text-gray-300 mt-4">
                                    <strong>Total Revenue</strong>: This chart shows the total revenue generated by each lead source. Use this information to identify which sources are most profitable.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <h3 className="text-2xl font-semibold text-primaryYellow mb-4">Conversion Rate by Lead Source</h3>
                                {visualizations.conversionRateChart}
                                <p className="text-lg text-gray-300 mt-4">
                                    <strong>Conversion Rate</strong>: This chart displays the conversion rate for each lead source. Higher conversion rates indicate more effective lead sources.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold text-primaryYellow mb-4">Tips to Improve Your Sales</h3>
                            <ul className="list-disc list-inside text-lg text-gray-300">
                                <li>Focus on lead sources with high conversion rates to maximize your revenue.</li>
                                <li>Analyze why certain lead sources have lower conversion rates and address those issues.</li>
                                <li>Invest more in marketing strategies that drive high-quality leads.</li>
                                <li>Regularly review and adjust your sales tactics based on data insights.</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Visualize;