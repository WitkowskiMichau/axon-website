import React, { useEffect, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tips from "@/components/Tips";
import VisualizationSection from "@/components/VisualizationSection";
import {PercentageOfOverallWins, ConversionRateByLeadSource} from "@/data/MockData";
import RevenueTrendChart from "@/components/RevenueTrendChart";
import { RevenueOverTimeData } from "@/data/revenueOverTimeMock";

const tipsData = [
    { title: "Maximize High-Performing Channels", description: "Consider resigning from low performing channels and invest thus created sum in best-performing." },
    { title: "ROI Estimation", description: "Best performing channel give you $ / deal, second-best performing does $ / deal and third-best performing does $ / deal. Extract cost structure to understand the overall ROI on these channels." },
    { title: "Leverage Seasonal Insights", description: "Use historical data to detect if those are seasonal changes." }
];

const Visualize: React.FC = () => {
    const [visualizations, setVisualizations] = useState<{
        totalRevenueData: { leadSource: string; value: number }[];
        conversionRateData: { leadSource: string; value: number }[];
    } | null>(null);

    const processData = useCallback(() => {
        const totalRevenueData = (Object.keys(PercentageOfOverallWins) as Array<keyof typeof PercentageOfOverallWins>).map((source) => ({
            leadSource: source,
            value: PercentageOfOverallWins[source],
        }));

        const conversionRateData = (Object.keys(ConversionRateByLeadSource) as Array<keyof typeof ConversionRateByLeadSource>).map((source) => ({
            leadSource: source,
            value: ConversionRateByLeadSource[source],
        }));

        setVisualizations({
            totalRevenueData,
            conversionRateData,
        });
    }, []);

    useEffect(() => {
        processData();
    }, [processData]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-darkBlue to-gray-800 text-white">
            <Header />
            <div className="container py-12 mx-auto w-3/4 px-4 sm:px-8 lg:px-16">
                <h1 className="text-5xl font-bold text-center text-primaryYellow mb-8 mt-28 font-russo">Uncover Your Most Profitable Sources</h1>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                    Welcome to your Lead Source Insights. Explore the detailed breakdown of revenue and conversion rates by each lead channel to prioritize the strategies that generate the most significant impact.
                </p>
                {visualizations && (
                    <div className="mt-8">
                        <RevenueTrendChart data={RevenueOverTimeData} />
                        <div className="flex flex-wrap justify-between">
                            <VisualizationSection
                                title="Average source value "
                                description=""
                                data={visualizations.totalRevenueData}
                                valueKey="totalRevenue"
                                label="Total Revenue (% of Overall Wins)"
                                chartType="bar"
                                unit={"USD"}
                            />
                            <VisualizationSection
                                title="Lead Source Conversion Efficiency"
                                description=""
                                data={visualizations.conversionRateData}
                                valueKey="conversionRate"
                                label="Conversion Rate"
                                chartType="bar"
                                unit={"%"}
                            />
                        </div>
                        <Tips tips={tipsData} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Visualize;