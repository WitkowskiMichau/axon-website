import React, { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" mb-4">
            <h3
                className="text-2xl font-russo text-white cursor-pointer"
                onClick={toggleAnswer}
            >
                {question}
            </h3>
            <div
                className={`overflow-hidden transition-height duration-500 ease-in-out ${
                    isOpen ? "h-auto" : "h-0"
                }`}
            >
                <p className="text-lg text-gray-300 mt-4">{isOpen && "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
            </div>
        </div>
    );
};

export default FAQItem;