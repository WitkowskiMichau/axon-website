import React, { useRef, useEffect, useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("0px");

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (ref.current) {
            setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="mb-4">
            <h3
                className={`text-2xl font-russo cursor-pointer transition-colors duration-500 ${
                    isOpen ? 'bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent' : 'text-white'
                }`}
                onClick={toggleAnswer}
            >
                {question}
            </h3>
            <div
                ref={ref}
                className="overflow-hidden transition-[height,opacity] duration-500 ease-in-out"
                style={{ height, opacity: isOpen ? 1 : 0 }}
            >
                <p className="text-lg text-gray-300 mt-4">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default FAQItem;