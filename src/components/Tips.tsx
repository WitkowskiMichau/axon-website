import React from "react";

interface Tip {
    title: string;
    description: string;
}

interface TipsProps {
    tips: Tip[];
}

const Tips: React.FC<TipsProps> = ({ tips }) => {
    return (
        <div className="mt-12">
            <h3 className="text-3xl font-semibold text-primaryYellow mb-4">Growth Tips Based on Lead Insights</h3>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                {tips.map((tip, index) => (
                    <li key={index}>
                        <strong>{tip.title}:</strong> {tip.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tips;