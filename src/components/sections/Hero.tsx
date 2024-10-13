const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 h-96 flex items-center justify-center">
            <section className="container py-12 text-center mx-auto">
                <h2 className="mt-32 text-5xl font-bold mb-6 font-russo text-90sBlue animate-colorChange">
                    Never miss your revenue quota using all world's largest LLMs.
                </h2>
                <p className="text-2xl text-primaryYellow font-jost">
                    Upload your data or connect your data source and Axon will analyse, present <br />
                    and find actionable plan for you. We don't use data externally in any shape or form.
                </p>
            </section>
        </div>
    );
};

export default Hero;