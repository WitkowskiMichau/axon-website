// src/components/sections/Faq.tsx
import {useState} from 'react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        "How do you provide forecast accuracy?",
        "How are you different than any other analytical tool?",
        "Would you be able to provide me with industry benchmarks?",
        "Is my data secure?",
        "How about making sense of user data with Axon?"
    ];

    return (
        <div className='bg-black shadow-top'>
            <section className="container py-12 text-center mx-auto bg-black text-white">
                <h2 className="text-4xl font-russo text-primaryYellow mb-8">FAQ</h2>
                <div className="flex flex-col items-center gap-4">
                    {faqs.map((question, index) => (
                        <div key={index} className="w-full max-w-2xl">
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="w-full text-left p-4 focus:outline-none"
                            >
                                {question}
                            </button>
                            {openIndex === index && (
                                <div className="p-4 text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                                    libero. Sed cursus ante dapibus diam.
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Faq;