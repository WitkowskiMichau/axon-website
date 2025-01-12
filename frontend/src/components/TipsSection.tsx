import React from "react";

interface Tip {
    title: string;
    description: string;
    data: string;
}

interface TipsSectionProps {
    tips: Tip[] | null;
}

const TipsSection: React.FC<TipsSectionProps> = ({ tips }) => {
    if (!tips || tips.length === 0) {
        return <p className="text-gray-300 text-center mt-4">No tips available at the moment.</p>;
    }
    console.log('xxx', tips);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {tips.map((tip, index) => (
                <div
                    key={index}
                    className="bg-darkBlue p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-xl transition-shadow"
                >
                    <h3 className="text-primaryYellow font-bold text-lg mb-2 h-14">{tip.title}</h3>
                    <p className="text-gray-300 text-sm">{tip.data}</p> <br/>
                    <p className="text-gray-300 text-sm">{tip.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TipsSection;
