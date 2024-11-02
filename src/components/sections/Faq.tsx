import React from "react";
import FAQItem from "@/components/sections/FaqItem";

const FAQ = () => {
    const faqItems = [
        { question: "What is AxonAI for?", answer: "Axon help solopreneurs and small teams understand data they gather about their clients and users and create actionable plans for revenue growth." },
        { question: "What if I don't have data file?", answer: "You can register and connect your data source: CRM, database or any analytical tool"},
        { question: "How do you provide insights accuracy?", answer: "We do cohort analysis and multivariable analysis using all available LLMs on the market: ChatGPT, Llama, Claude, Gemini, Mistral and many more." },
        { question: "How are you different than any other analytical tool?", answer: "We've got free tier, you can implement Axon in 45 sec, we create bespoke presentation of your own data instead of predefined dashboards and we provide better accuracy comparing multiple data models." },
        { question: "Is my data secure?", answer: "Yes, we don't store, process or share any of your data externally." },
        { question: "How about making sense of user data with Axon?", answer: "We not only perform revenue and pipeline analysis but can also help you understand your users data to convert more into paid accounts." }
    ];

    return (
        <div className='bg-darkBlue'>
            <section className="container py-12 mx-auto w-3/4 px-4 sm:px-8 lg:px-16">
                <h2 className="text-4xl sm:text-3xl font-russo text-primaryYellow mb-8 text-center pb-10">Frequently Asked Questions</h2>
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