import React from "react";

interface CRMTileProps {
    title: string;
    description: string;
}

const CRMTile: React.FC<CRMTileProps> = ({ title, description }) => {
    return (
        <div className="cursor-pointer bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default CRMTile;