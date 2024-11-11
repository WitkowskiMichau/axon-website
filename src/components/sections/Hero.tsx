const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
            <section className="container mx-auto pb-24">
                <h2 className="pb-12 mt-40 text-5xl font-bold font-russo text-90sBlue animate-colorChange text-center">
                    Use actionable data to run your business
                </h2>
                <ul className="text-2xl text-primaryYellow font-jost space-y-6 list-none flex flex-col items-center">
                    <li className="w-full text-center">Drop the file or connect your data source</li>
                    <li className="w-full text-center">Get real-time graphs and focus points</li>
                    <li className="w-full text-center">Axon will find actionable plan for you</li>
                    <li className="w-full text-center">Connect many data sources or use free version</li>
                </ul>
            </section>
        </div>
    );
};


export default Hero;
