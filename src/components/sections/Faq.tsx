// src/components/sections/FAQ.tsx

import React from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({question, answer}: FAQItemProps) => {
    return (
        <div className="bg-black rounded-lg p-6 w-full border-primaryYellow border-2 border-opacity-25 mb-4">
            <h3 className="text-2xl font-russo text-primaryYellow mb-4">{question}</h3>
            <p className="text-lg text-gray-300">{answer}</p>
        </div>
    );
};

const FAQ = () => {
    const faqItems = [
        {
            question: "What is Axon?",
            answer: "Axon is a powerful data analytics tool designed to help businesses make data-driven decisions."
        },
        {
            question: "How much does Axon cost?",
            answer: "Axon offers a free plan and two paid plans: Axon Pro for $149 and Axon AI Suite for $199."
        },
        {
            question: "What features are included in the free plan?",
            answer: "The free plan includes Excel/CSV data import, enhanced data security, and more."
        }
    ];

    return (
        <div className='bg-darkBlue'>
            <section className="container py-12 text-center mx-auto">
                <h2 className="text-4xl font-russo text-primaryYellow mb-8">Frequently Asked Questions</h2>
                <div className="flex flex-col items-center gap-8">
                    {faqItems.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FAQ;