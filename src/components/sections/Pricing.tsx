import React from "react";
import PriceItem from "@/components/sections/PriceItem";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Axon Starter",
            price: "Free Forever",
            features: [
                "Excel / CSV data import",
                "Enhanced data security",
                "Every competitor's feature but for free"
            ]
        },
        {
            title: "Axon Pro",
            price: "For solopreneurs and small teams $149",
            features: [
                "All Starter features",
                "Real-time analytics and actionable plans",
                "2 data connectors (including Hubspot etc.)",
                "Unlimited usage for 1 seat",
                "Revenue Forecasting",
                "Free trial, no credit required"
            ]
        },
        {
            title: "Axon AI Suite",
            price: "For SMBs and Scale Ups $199",
            features: [
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
            ]
        }
    ];

    return (
        <div className='bg-gradient-to-b from-gray-900 to-darkBlue shadow-lg'>
            <section className="container py-12 mx-auto">
                <div className="pb-24">
                    <h2 className="text-4xl font-russo text-primaryYellow mb-8 text-center">Pricing Plans</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {pricingPlans.map((plan, index) => (
                            <PriceItem
                                key={index}
                                title={plan.title}
                                price={Number(plan.price)}  // Convert to number
                                features={plan.features}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;