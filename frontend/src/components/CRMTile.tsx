import React from "react";

interface CRMTileProps {
    title: string;
    icon: string;
}

const CRMTile: React.FC<CRMTileProps> = ({ title, icon }) => {
    return (
        <div className="cursor-pointer bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <img src={icon} alt={title} className="h-12 mx-auto mb-5 object-contain" style={{ height: '48px' }} />
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
    );
};

export default CRMTile;