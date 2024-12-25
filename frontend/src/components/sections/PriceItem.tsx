import React, { useRef, useEffect, useState } from "react";

interface PriceItemProps {
    title: string;
    price: string;
    features: string[];
    index: number;
}

const PriceItem: React.FC<PriceItemProps> = ({ title, price, features, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`price-item-hover-effect p-6 bg-gradient-to-b from-gray-900 to-darkBlue rounded-lg shadow-md fade-in-top border border-white border-opacity-20 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
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