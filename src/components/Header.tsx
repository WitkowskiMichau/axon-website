"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from '@/assets/logo.png';
import LoginModal from "@/components/LoginModal";

const Header = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const handleLoginClick = () => {
        setLoginModalOpen(true);
    };

    const handleCloseModal = () => {
        setLoginModalOpen(false);
    };

    return (
        <header className="fixed py-3 top-0 left-0 w-full shadow-bright px-10 bg-black z-50 h-17">
            <div className="flex justify-between items-center h-full">
                <div className='flex items-center'>
                    <Link href="/">
                        <img src={logo.src} alt="Logo axon" className="w-8 h-8 cursor-pointer"/>
                    </Link>
                    <ul className="flex flex-end space-x-6 text-white font-russo p-0 cursor-pointer pl-8">
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">How it works</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">Product</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">Pricing</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">FAQ</li>
                    </ul>
                </div>

                <nav>
                    <ul className="flex lex-end space-x-6 text-white font-russo p-0 cursor-pointer">
                        <li
                            className='p-1 px-2 text-l bg-primaryYellow text-black rounded-md hover:bg-yellow-600 transition-colors duration-300'
                            onClick={handleLoginClick}
                        >
                            Log in
                        </li>
                        <li className='p-1 px-2 text-l bg-primaryYellow text-black rounded-md hover:bg-yellow-600 transition-colors duration-300'>
                            Get Started
                        </li>
                    </ul>
                </nav>
            </div>
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
        </header>
    );
};

export default Header;