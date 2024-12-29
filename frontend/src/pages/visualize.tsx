import React, { useEffect, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tips from "@/components/Tips";
import VisualizationSection from "@/components/VisualizationSection";
import { TipsData1, TipsData2, tipsData } from "@/data/MockData";
import RevenueTrendChart from "@/components/RevenueTrendChart";
import TipsSmall from "@/components/TipsSmall";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

interface Revenue {
    date: string;
    leadSource: string;
    revenue: number;
    description: string;
}

const Visualize: React.FC = () => {
    const [visualizations, setVisualizations] = useState<{
        averageSourceValue: { leadSource: string; value: number }[];
        conversionRateData: { leadSource: string; value: number }[];
        revenueOverTimeData: Revenue[];
    } | null>(null);

    const { data, error, isValidating } = useSWR("http://localhost:8000/api/lps/upload", fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: true,
    });

    const processData = useCallback(() => {
        if (data) {
            console.log('Dane z SWR:', data);

            const averageSourceValue = Object.keys(data.averageSourceValue).map((source) => ({
                leadSource: source,
                value: data.averageSourceValue[source],
            }));

            const conversionRateData = Object.keys(data.conversionEfficiency).map((source) => ({
                leadSource: source,
                value: data.conversionEfficiency[source],
            }));

            const revenueOverTimeData = data.revenueOverTime.map((item: Revenue) => ({
                date: item.date,
                leadSource: item.leadSource,
                revenue: item.revenue,
                description: item.description,
            }));

            setVisualizations({
                averageSourceValue,
                conversionRateData,
                revenueOverTimeData
            });
        }
    }, [data]);

    useEffect(() => {
        processData();
    }, [processData]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-darkBlue to-gray-800 text-white">
            <Header />
            <div className="container py-12 mx-auto w-3/4 px-4 sm:px-8 lg:px-16">
                <h1 className="text-5xl font-bold text-center text-primaryYellow mb-8 mt-28 font-russo">
                    Uncover Your Most Profitable Sources
                </h1>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                    Welcome to your Lead Source Insights. Explore the detailed breakdown of revenue and conversion rates
                    by each lead channel to prioritize the strategies that generate the most significant impact.
                </p>
                {visualizations && (
                    <div className="mt-8">
                        <RevenueTrendChart data={visualizations.revenueOverTimeData} />
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-1/2 p-4">
                                <VisualizationSection
                                    title="Average source value "
                                    description=""
                                    data={visualizations.averageSourceValue}
                                    valueKey="totalRevenue"
                                    label="Total Revenue (% of Overall Wins)"
                                    chartType="bar"
                                    unit={"USD"}
                                />
                                <TipsSmall tips={TipsData1} />
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <VisualizationSection
                                    title="Lead Source Conversion Efficiency"
                                    description=""
                                    data={visualizations.conversionRateData}
                                    valueKey="conversionRate"
                                    label="Conversion Rate"
                                    chartType="bar"
                                    unit={"%"}
                                />
                                <TipsSmall tips={TipsData2} />
                            </div>
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