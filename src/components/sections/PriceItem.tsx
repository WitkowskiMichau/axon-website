import React from "react";

interface PriceItemProps {
    title: string;
    price: string;
    features: string[];
    index: number;
}

const PriceItem: React.FC<PriceItemProps> = ({ title, price, features, index }) => {
    return (
        <div className="price-item-hover-effect p-6 bg-gradient-to-b from-gray-900 to-darkBlue rounded-lg shadow-md fade-in-top border border-white border-opacity-20"
             style={{animationDelay: `${index * 0.2}s`}}>
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">{title}</h3>
            <p className="text-2xl mb-6 text-primaryYellow p-3">{price}</p>
            <ul className="list-disc list-inside text-white">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default PriceItem;