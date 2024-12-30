import React from "react";

interface TipsProps {
    tips: string[];
}

const Tips: React.FC<TipsProps> = ({ tips }) => {
    console.log('tips', tips)
    return (
        <div className="mt-12">
            <h3 className="text-3xl font-semibold text-primaryYellow mb-4">Growth Tips Based on Source Insights</h3>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                {tips.map((tip, index) => (
                    <li key={index}>
                        {tip}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tips;