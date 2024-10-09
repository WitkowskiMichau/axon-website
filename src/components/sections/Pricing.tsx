import React from "react";
import PriceItem from "@/components/sections/PriceItem";

const Pricing = () => {
    return (
        <div className='bg-darkBlue'>
            <section className="container py-12 mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg pb-24">
                    <h2 className="text-4xl font-russo text-darkBlue mb-8 text-center">Pricing Plans</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <PriceItem
                            title="Axon Starter"
                            price="Free Forever"
                            features={[
                                "Excel / CSV data import",
                                "Enhanced data security",
                                "Every competitor's feature but for free"
                            ]}
                        />
                        <PriceItem
                            title="Axon Pro"
                            price="For solopreneurs and small teams $149"
                            features={[
                                "All Starter features",
                                "Real-time analytics and actionable plans",
                                "2 data connectors (including Hubspot etc.)",
                                "Unlimited usage for 1 seat",
                                "Revenue Forecasting",
                                "Free trial, no credit required"
                            ]}
                        />
                        <PriceItem
                            title="Axon AI Suite"
                            price="For SMBs and Scale Ups $199"
                            features={[
                                "All Pro features",
                                "Unlimited data sources and connectors",
                                "Unlimited seats",
                                "Unlimited usage",
                                "Priority Support",
                                "Quarterly Business Review",
                                "Onboarding call",
                                "White label (coming soon)",
                                "SSO (coming soon)",
                                "Free trial, no credit required"
                            ]}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;