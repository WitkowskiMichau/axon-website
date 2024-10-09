import React from 'react';

interface TileProps {
    title: string;
    description: string;
    icon: string;
}

const Tile: React.FC<TileProps> = ({title, description, icon }) => {
    return (
        <div className="relative cursor-pointer bg-black p-0 rounded-lg transition-transform duration-300 ease-in-out hover:shadow-xl h-64 w-80 tile-hover-effect hover:scale-101 hover:shadow-[0_0_0_4px_rgba(255,255,0,1)]">
            <div className="border-primaryYellow border-2 border-opacity-25 bg-black rounded-lg p-6 text-left flex flex-col justify-center items-center h-full w-full hover:border-4 hover:border-opacity-100 transition-all duration-300">
                <img src={icon} alt={title} className="mb-8 w-16 h-16"/>
                <h3 className="text-lg text-center text-primaryYellow font-russo">{title}</h3>
                <p className="text-gray-300 mb-4 text-s text-center pt-2">{description}</p>
            </div>
        </div>
    );
};

export default Tile;