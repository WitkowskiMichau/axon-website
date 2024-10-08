interface PriceItemProps {
    title: string;
    price: string;
    features: string[];
}

const PriceItem = ({ title, price, features }: PriceItemProps) => {
    return (
        <div className="bg-black rounded-lg p-6 w-80 border-primaryYellow border-2 border-opacity-25">
            <h3 className="text-2xl font-russo text-white mb-4">{title}</h3>
            <p className="text-xl text-primaryYellow mb-4">{price}</p>
            <ul className="text-left text-gray-300 mb-4">
                {features.map((feature, index) => (
                    <li key={index} className="mb-2">- {feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default PriceItem;