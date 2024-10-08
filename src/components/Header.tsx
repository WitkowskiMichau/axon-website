// src/components/Header.tsx
const Header = () => {
    return (
        <header className="shadow-md px-6 bg-black py-4">
            <div className="flex justify-between items-center">
                <div className='flex'>
                    <div className="text-2xl leading-none font-bold text-primaryYellow font-russo p-0 pr-4">axon</div>
                </div>
                <nav>
                    <ul className="flex flex-end space-x-6 text-white font-russo p-0 cursor-pointer">
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">How it
                            works
                        </li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">Product</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">Pricing</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">FAQ</li>
                        <li className='bg-primaryYellow text-black rounded-md px-2 hover:bg-black hover:text-primaryYellow transition-colors duration-300'>Log
                            in
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
