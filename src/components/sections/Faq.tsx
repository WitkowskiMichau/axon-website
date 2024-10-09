import React from "react";
import FAQItem from "@/components/sections/FaqItem";

const FAQ = () => {
    const faqItems = [
        { question: "How do you provide forecast accuracy?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "How are you different than any other analytical tool?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "Would you be able to provide me with industry benchmarks?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "Is my data secure?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "How about making sense of user data with Axon?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];

    return (
        <div className='bg-darkBlue'>
            <section className="container py-12 mx-auto w-3/4 px-16">
                <h2 className="text-4xl font-russo text-primaryYellow mb-8 text-center pb-10">Frequently Asked Questions</h2>
                <div className="flex flex-col items-start gap-4">
                    {faqItems.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FAQ;