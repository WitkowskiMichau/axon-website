const Header = () => {
    return (
        <header className="fixed py-8 top-0 left-0 w-full shadow-bright px-12 bg-black z-50 h-17">
            <div className="flex justify-between items-center h-full">
                <div className='flex items-center'>
                    <div className="text-5xl font-bold text-primaryYellow font-russo p-0 pr-8 leading-extra-tight">
                        ax<br/>on
                    </div>
                    <ul className="flex flex-end space-x-6 text-white font-russo p-0 cursor-pointer">
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">How it works</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">Product</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">Pricing</li>
                        <li className="hover:text-primaryYellow hover:bg-black transition-colors duration-300">FAQ</li>
                    </ul>
                </div>

                <nav>
                    <ul className="flex lex-end space-x-6 text-white font-russo p-0 cursor-pointer">
                        <li className='text-2xl bg-primaryYellow text-black rounded-md p-3 hover:bg-black hover:text-primaryYellow hover:border hover:border-primaryYellow transition-colors duration-300'>
                            Log in
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;