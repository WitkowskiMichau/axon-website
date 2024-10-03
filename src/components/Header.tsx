// src/components/Header.tsx
const Header = () => {
  return (
    <header className="shadow-md px-6 bg-black py-2">
      <div className="flex justify-between items-center">
        <div className="text-2xl leading-none font-bold text-primaryYellow font-russo p-0">axon</div>
        <nav>
          <ul className="flex flex-end space-x-4 text-white font-russo p-0 cursor-pointer">
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            <li>Element 4</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
