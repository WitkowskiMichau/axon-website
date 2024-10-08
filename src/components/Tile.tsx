// src/components/Tile.tsx
import Link from 'next/link';

interface TileProps {
    title: string;
    description: string;
    icon: string;
    id: string;
    url?: string;
}

const Tile = ({title, description, icon, id, url}: TileProps) => {
    return (
        <Link href={`/${url}`}>
            <div className="relative cursor-pointer bg-black p-0 rounded-lg transition-transform duration-300 ease-in-out hover:shadow-xl h-64 w-80 tile-hover-effect hover:scale-102 hover:shadow-[0_0_0_4px_rgba(255,255,0,1)]">
                <div className="border-primaryYellow border-2 border-opacity-25 bg-black rounded-lg p-6 text-left flex flex-col justify-center items-center h-full w-full">
                    <img src={icon} alt={title} className="mb-8 w-16 h-16"/>
                    <h3 className="text-lg text-center text-primaryYellow font-russo">{title}</h3>
                    <p className="text-gray-300 mb-4 text-s text-center pt-2">{description}</p>
                </div>
                <div className="absolute inset-0">
                    <div className="tile-hover-line"></div>
                    <div className="tile-hover-line"></div>
                    <div className="tile-hover-line"></div>
                    <div className="tile-hover-line"></div>
                </div>
            </div>
        </Link>
    );
};

export default Tile;