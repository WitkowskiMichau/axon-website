import React from "react";
import CRMTile from "@/components/CRMTile";
import { crmTiles } from "@/consts";

interface CRMModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CRMModal: React.FC<CRMModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 text-white rounded-lg p-6 w-11/12 max-h-[80vh] overflow-y-auto shadow-lg relative" style={{ boxShadow: '0 0 20px 5px white' }}>
                <button
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400 transition-colors duration-300"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4 text-primaryYellow">Connect Multiple Data Sources</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {crmTiles.map((tile, index) => (
                        <CRMTile key={index} title={tile.title} />
                    ))}
                </div>
                <button
                    className="bg-gray-700 text-white py-2 px-4 rounded w-full font-bold hover:bg-gray-600 transition-colors duration-300 mt-4"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CRMModal;