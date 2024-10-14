import React, { useRef, useEffect, useState } from "react";

interface FAQItemProps {
    question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

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
            className={`mb-4 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${isOpen ? 0 : 0.2}s` }}
        >
            <h3
                className={`text-2xl font-russo cursor-pointer transition-colors duration-500 ${
                    isOpen ? 'bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent' : 'text-white'
                }`}
                onClick={toggleAnswer}
            >
                {question}
            </h3>
            <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <p className="text-lg text-gray-300 mt-4">
                    {isOpen && "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </p>
            </div>
        </div>
    );
};

export default FAQItem;