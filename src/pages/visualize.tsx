import React, { useEffect, useState, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConversionRatePercentage, ConversionRateByLeadSource } from "@/data/MockData";

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
        const totalRevenueData = (Object.keys(ConversionRatePercentage) as Array<keyof typeof ConversionRatePercentage>).map((source) => ({
            leadSource: source,
            totalRevenue: ConversionRatePercentage[source],
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
            gradient.addColorStop(0, "#00BFFF"); // '90s-blue'
            gradient.addColorStop(0.5, "#FF69B4"); // '90s-pink'
            gradient.addColorStop(1, "#00BFFF"); // '90s-blue'
            return gradient;
        };

        return (
            <Bar
                data={{
                    labels,
                    datasets: [
                        {
                            label: valueKey === "totalRevenue" ? "Total Revenue (% of Overall Won)" : "Conversion Rate",
                            data: values,
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                const { ctx } = chart;
                                return gradient(ctx);
                            },
                            borderColor: "rgba(0, 0, 0, 0)", // Remove border
                            borderWidth: 0, // Set border width to 0
                            borderRadius: 6, // Add rounded corners to bars
                            hoverBackgroundColor: (context) => {
                                const chart = context.chart;
                                const { ctx } = chart;
                                return gradient(ctx);
                            }, // Use the same gradient for hover
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true, // Prevent charts from growing indefinitely
                    plugins: {
                        legend: {
                            display: false, // Remove legend
                        },
                        tooltip: {
                            displayColors: false,
                            backgroundColor: "rgba(0, 0, 0, 0.8)", // Softer tooltip background
                            titleFont: {
                                family: "'Russo One', sans-serif", // Use the website's main font
                                size: 14,
                                weight: "bold", // Bold tooltip title
                            },
                            bodyFont: {
                                family: "'Russo One', sans-serif", // Use the website's main font
                                size: 11, // Smaller font size
                            },
                            padding: 8, // Reduce padding for a more subtle tooltip
                            cornerRadius: 4, // Softer tooltip corners
                            callbacks: {
                                label: (context) => {
                                    if (valueKey === "conversionRate") {
                                        return `${context.raw}%`;
                                    }
                                    return `$${context.raw} (${((context.raw as number) / values.reduce((a, b) => a + b, 0) * 100).toFixed(2)}%)`;
                                },
                            },
                        },
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false, // Hide grid lines for X-axis for a cleaner look
                            },
                            ticks: {
                                color: "#fff",
                                font: {
                                    family: "'Russo One', sans-serif", // Use the website's font
                                    size: 12, // Smaller font size
                                },
                            },
                        },
                        y: {
                            grid: {
                                color: "rgba(255, 255, 255, 0.1)", // Soft grid lines for better contrast
                            },
                            ticks: {
                                color: "#fff",
                                font: {
                                    family: "'Russo One', sans-serif", // Use the website's font
                                    size: 12, // Smaller font size
                                },
                                callback: (value) => {
                                    if (valueKey === "conversionRate") {
                                        return `${value}%`;
                                    }
                                    return `$${value}`;
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
                                <h3 className="text-3xl font-semibold text-primaryYellow mb-4">Total Revenue (% of Won)</h3>
                                <div className="h-80">{visualizations.totalRevenueChart}</div> {/* Added fixed height to prevent infinite growth */}
                                <p className="text-lg text-gray-300 mt-4">
                                    <strong>Total Revenue:</strong> Identify which lead sources are contributing the most to your overall revenue and understand their proportion of the total &quot;Won&quot; revenue to allocate resources effectively.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <h3 className="text-3xl font-semibold text-primaryYellow mb-4">Lead Source Conversion Efficiency</h3>
                                <div className="h-80">{visualizations.conversionRateChart}</div> {/* Added fixed height to prevent infinite growth */}
                                <p className="text-lg text-gray-300 mt-4">
                                    <strong>Conversion Rate:</strong> Understand which channels have the highest conversion efficiency to optimize your sales strategy effectively.
                                </p>
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