import React from "react";

interface PriceItemProps {
    title: string;
    price: number;
    features: string[];
    index: number;
}

const PriceItem: React.FC<PriceItemProps> = ({ title, price, features, index }) => {
    return (
        <div className="price-item-hover-effect p-6 bg-white rounded-lg shadow-md fade-in-top" style={{ animationDelay: `${index * 0.2}s` }}>
            <h3 className="text-2xl font-bold pb-2 mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent border-b-4 border-gradient-to-r">{title}</h3>
            <p className="text-xl font-semibold">{price}</p>
            <ul>
                {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default PriceItem;