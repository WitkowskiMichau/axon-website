import React from "react";

const PriceItem = ({ title, price, features }) => {
    return (
        <div className="price-item-hover-effect p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-xl mb-4">{price}</p>
            <ul className="list-disc list-inside">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default PriceItem;