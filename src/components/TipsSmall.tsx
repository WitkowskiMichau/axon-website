import React from "react";

interface Tip {
    title: string;
    description: string;
}

interface TipsProps {
    tips: Tip[];
}

const TipsSmall: React.FC<TipsProps> = ({ tips }) => {
    return (
        <div className="mt-2">
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

export default TipsSmall;