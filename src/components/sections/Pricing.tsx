// src/components/sections/Pricing.tsx
const Pricing = () => {
    return (
        <section className="container py-12 text-center mx-auto">
            <h2 className="text-4xl font-russo text-black mb-8">Pricing Plans</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {/* Axon Starter */}
                <div className="bg-gray-900 border-2 border-primaryYellow border-opacity-40 rounded-lg p-6 w-80">
                    <h3 className="text-2xl font-russo text-white mb-4">Axon Starter</h3>
                    <p className="text-xl text-primaryYellow mb-4">Free Forever</p>
                    <ul className="text-left text-gray-300 mb-4">
                        <li className="mb-2">- Excel / CSV data import</li>
                        <li className="mb-2">- Enhanced data security</li>
                        <li className="mb-2">- Every competitor's feature but for free</li>
                    </ul>
                </div>
                {/* Axon Pro */}
                <div className="bg-gray-900 border-2 border-primaryYellow border-opacity-40 rounded-lg p-6 w-80">
                    <h3 className="text-2xl font-russo text-white mb-4">Axon Pro</h3>
                    <p className="text-xl text-primaryYellow mb-4">For solopreneurs and small teams $149</p>
                    <ul className="text-left text-gray-300 mb-4">
                        <li className="mb-2">- All Starter features</li>
                        <li className="mb-2">- Real-time analytics and actionable plans</li>
                        <li className="mb-2">- 2 data connectors (including Hubspot etc.)</li>
                        <li className="mb-2">- Unlimited usage for 1 seat</li>
                        <li className="mb-2">- Revenue Forecasting</li>
                        <li className="mb-2">- Free trial, no credit required</li>
                    </ul>
                </div>
                {/* Axon AI Suite */}
                <div className="bg-gray-900 border-2 border-primaryYellow border-opacity-40 rounded-lg p-6 w-80">
                    <h3 className="text-2xl font-russo text-white mb-4">Axon AI Suite</h3>
                    <p className="text-xl text-primaryYellow mb-4">For SMBs and Scale Ups $199</p>
                    <ul className="text-left text-gray-300 mb-4">
                        <li className="mb-2">- All Pro features</li>
                        <li className="mb-2">- Unlimited data sources and connectors</li>
                        <li className="mb-2">- Unlimited seats</li>
                        <li className="mb-2">- Unlimited usage</li>
                        <li className="mb-2">- Priority Support</li>
                        <li className="mb-2">- Quarterly Business Review</li>
                        <li className="mb-2">- Onboarding call</li>
                        <li className="mb-2">- White label (coming soon)</li>
                        <li className="mb-2">- SSO (coming soon)</li>
                        <li className="mb-2">- Free trial, no credit required</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Pricing;