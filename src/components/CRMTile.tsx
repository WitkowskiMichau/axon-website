import React from "react";

interface CRMTileProps {
    title: string;
}

const CRMTile: React.FC<CRMTileProps> = ({ title}) => {
    return (
        <div className="cursor-pointer bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
        </div>
    );
};

export default CRMTile;