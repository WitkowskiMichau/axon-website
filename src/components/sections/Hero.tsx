const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
            <section className="container mx-auto pb-24">
                <h2 className="pb-12 mt-40 text-5xl font-bold font-russo text-90sBlue animate-colorChange text-center">
                    Use actionable data to run your business
                </h2>
                <ul className="text-2xl text-primaryYellow font-jost space-y-6 list-none flex flex-col items-center">
                    <li className="w-full text-center">Upload your data or connect to your preferred source effortlessly.</li>
                    <li className="w-full text-center">Gain immediate insights with live graphs and actionable highlights.</li>
                    <li className="w-full text-center">Receive a tailored growth plan personalized to your business.</li>
                    <li className="w-full text-center">Start with multiple data integrations or explore the free version today.</li>
                </ul>
            </section>
        </div>
    );
};


export default Hero;
