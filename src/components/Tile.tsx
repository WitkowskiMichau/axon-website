// src/components/Tile.tsx
import Link from 'next/link';

interface TileProps {
  title: string;
  description: string;
  icon: string;
  id: string;
  url?: string;
}

const Tile = ({ title, description, icon, id, url }: TileProps) => {
  return (
    <Link href={`/${url}`}>
      <div className="cursor-pointer bg-black shadow-md rounded-lg p-6 text-left flex flex-col justify-between border border-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl h-56 w-72">
        <img src={icon} alt={title} className="mx-auto mb-4 w-16 h-16" />
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-gray-300 mb-4 text-xs">{description}</p>
      </div>
    </Link>
  );
};

export default Tile;
