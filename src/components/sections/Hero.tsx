import { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <div className='bg-black'>
            <section ref={heroRef} className="container py-12 text-center mx-auto opacity-0">
                <h2 className="text-5xl font-bold mb-6 font-russo text-primaryYellow animate-initialJump">
                    Never miss your revenue quota using all world's largest LLMs.
                </h2>
                <p className="text-2xl text-primaryYellow font-jost animate-pulse">
                    Upload your data or connect your data source and Axon will analyse, present <br />
                    and find actionable plan for you. We don't use data externally in any shape or form.
                </p>
                <div></div>
            </section>
        </div>
    );
};

export default Hero;