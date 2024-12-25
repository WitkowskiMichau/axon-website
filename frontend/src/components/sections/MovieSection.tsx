const MovieSection = () => {
    return (
        <div className='bg-darkBlue shadow-top'>
            <section className="container py-12 text-center mx-auto">
                <p className="text-3xl text-primaryYellow mb-6 font-russo fade-in-top">
                    Upload your data file or connect your CRM / User Data and Axon will help you <br/> understand what
                    you&apos;re able to correct, enhance or prioritize.
                </p>
                <div className='py-8'>
                    <div className='mx-auto w-3/4 h-[500px] bg-black border-2 border-primaryYellow border-opacity-25 rounded-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-102 hover:shadow-bright hover:border-shine cursor-pointer fade-in-top'>
                        <h3 className="text-2xl font-russo text-white">Movie Title</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovieSection;