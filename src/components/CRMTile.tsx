import React from "react";

interface CRMTileProps {
    title: string;
    description: string;
    icon: string;
}

const CRMTile: React.FC<CRMTileProps> = ({ title, description, icon }) => {
    return (
        <div className="cursor-pointer bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default CRMTile;