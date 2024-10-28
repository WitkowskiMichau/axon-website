import React, { useEffect, useState, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PercentageOfOverallWins, ConversionRateByLeadSource } from "@/data/MockData";

Chart.register(CategoryScale);

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

    const processData = useCallback(() => {
        const totalRevenueData = (Object.keys(PercentageOfOverallWins) as Array<keyof typeof PercentageOfOverallWins>).map((source) => ({
            leadSource: source,
            totalRevenue: PercentageOfOverallWins[source],
        }));

        const conversionRateData = (Object.keys(ConversionRateByLeadSource) as Array<keyof typeof ConversionRateByLeadSource>).map((source) => ({
            leadSource: source,
            conversionRate: ConversionRateByLeadSource[source],
        }));

        setVisualizations({
            totalRevenueChart: generateBarChart(totalRevenueData, "totalRevenue"),
            conversionRateChart: generateBarChart(conversionRateData, "conversionRate"),
        });
    }, []);

    useEffect(() => {
        processData();
    }, [processData]);

    const generateBarChart = (data: VisualizationData[], valueKey: "totalRevenue" | "conversionRate"): JSX.Element => {
        const labels = data.map((item) => item.leadSource);
        const values = data.map((item) => item[valueKey] as number);

        const gradient = (ctx: CanvasRenderingContext2D) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#00BFFF");
            gradient.addColorStop(0.5, "#FF69B4");
            gradient.addColorStop(1, "#00BFFF");
            return gradient;
        };

        return (
            <Bar
                data={{
                    labels,
                    datasets: [
                        {
                            label: valueKey === "totalRevenue" ? "Total Revenue (% of Overall Wins)" : "Conversion Rate",
                            data: values,
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                const { ctx } = chart;
                                return gradient(ctx);
                            },
                            borderColor: "rgba(0, 0, 0, 0)",
                            borderWidth: 0,
                            borderRadius: 6,
                            hoverBackgroundColor: (context) => {
                                const chart = context.chart;
                                const { ctx } = chart;
                                return gradient(ctx);
                            },
                        },
                    ],
                }}
                options={{
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
                }}
            />
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-darkBlue to-gray-800 text-white">
            <Header />
            <div className="container py-12 mx-auto w-3/4 px-4 sm:px-8 lg:px-16">
                <h1 className="text-5xl font-bold text-center text-primaryYellow mb-8 mt-28 font-russo">Uncover Your Most Profitable Lead Channels</h1>
                <h2 className="text-2xl text-primaryYellow mb-4 text-center pb-10">Focus efforts on channels that deliver the highest return.</h2>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                    Welcome to your Lead Source Insights. Explore the detailed breakdown of revenue and conversion rates by each lead channel to prioritize the strategies that generate the most significant impact.
                </p>
                {visualizations && (
                    <div className="mt-8">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-1/2 p-4">
                                <h3 className="text-3xl font-semibold text-primaryYellow mb-4">Total Revenue (% of Overall Wins)</h3>
                                <div className="h-80">{visualizations.totalRevenueChart}</div>
                                <p className="text-lg text-gray-300 mt-4">
                                    <strong>Total Revenue:</strong> Understand the percentage contribution of each lead source to the overall won revenue. This helps determine which lead sources are driving the most financial success and where to allocate resources for maximum profitability.                                </p>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <h3 className="text-3xl font-semibold text-primaryYellow mb-4">Lead Source Conversion Efficiency</h3>
                                <div className="h-80">{visualizations.conversionRateChart}</div>
                                <p className="text-lg text-gray-300 mt-4">
                                    <strong>Conversion Rate:</strong> Understand the efficiency of each lead source by examining the percentage of successful conversions compared to total attempts. This insight can guide resource allocation and strategy optimization.                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-3xl font-semibold text-primaryYellow mb-4">Growth Tips Based on Lead Insights</h3>
                            <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                                <li><strong>Maximize High-Performing Channels:</strong> Direct Leads and Social Media have shown significant impact. Strategically increase spending and enhance campaigns to take advantage of these high performers.</li>
                                <li><strong>Channel-Specific Engagement:</strong> Tailor your approach based on each lead channel. For instance, Social Media leads could benefit from an interactive and personalized approach, while Referrals should be cultivated with trust-building and consistency.</li>
                                <li><strong>Revitalize Low-Impact Channels:</strong> Organic and Paid Search are currently lagging. Try A/B testing new content, optimizing landing pages, or tweaking audience targeting to better connect with potential customers.</li>
                                <li><strong>Improve Email Campaign Effectiveness:</strong> Introduce testing variations in email content and design, and leverage follow-ups to increase engagement. A more personal, story-driven narrative might yield better results.</li>
                                <li><strong>Leverage Seasonal Insights:</strong> Use data to detect seasonal trends and adjust campaigns accordingly. HubSpot analytics can help you identify patterns to plan future campaigns for greater consistency and effectiveness.</li>
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