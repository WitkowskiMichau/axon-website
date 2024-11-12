import React from "react";

interface CRMTileProps {
    title: string;
    description: string;
    icon: string;
}

const CRMTile: React.FC<CRMTileProps> = ({ title, description, icon }) => {
    return (
        <div className="cursor-pointer bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <img src={icon} alt={title} className="h-12 mx-auto mb-2 object-contain" style={{ height: '48px' }} />
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default CRMTile;