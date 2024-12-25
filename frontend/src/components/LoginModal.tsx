import React, { useState } from "react";
import CRMModal from "@/components/CRMModal";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [isCRMModalOpen, setCRMModalOpen] = useState(false);

    const handleLoginClick = () => {
        setCRMModalOpen(true);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white rounded-lg p-8 w-96 shadow-lg" style={{ boxShadow: '0 0 20px 5px white' }}>
                        <h2 className="text-3xl font-bold mb-6 text-primaryYellow">Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-primaryYellow"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 mb-6 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-primaryYellow"
                        />
                        <button
                            className="bg-primaryYellow text-black py-2 px-4 rounded w-full font-bold hover:bg-yellow-600 transition-colors duration-300 mb-4"
                            onClick={handleLoginClick}
                        >
                            Login
                        </button>
                        <button
                            className="bg-gray-700 text-white py-2 px-4 rounded w-full font-bold hover:bg-gray-600 transition-colors duration-300"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <CRMModal isOpen={isCRMModalOpen} onClose={() => setCRMModalOpen(false)} />
        </>
    );
};

export default LoginModal;