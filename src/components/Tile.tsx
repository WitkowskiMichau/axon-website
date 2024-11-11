import { TileProps } from "@/components/Types";
import { useRouter } from "next/router";

const Tile = ({ title, icon, url }: TileProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (url) {
            router.push(url);
        }
    };

    return (
        <div
            className="bg-black rounded-lg p-6 w-72 h-48 border-primaryYellow border-2 border-opacity-25 transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-102 hover:shadow-bright hover:border-shine cursor-pointer flex items-center"
            onClick={handleClick}
        >
            <div className="flex items-center min-h-24">
                <img src={icon} alt={title} className="w-12 h-12 mr-4" />
                <h3 className="text-l font-russo text-white">{title}</h3>
            </div>
        </div>
    );
};

export default Tile;