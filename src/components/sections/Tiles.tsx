import Tile from "@/components/Tile";
import { tiles } from "@/consts";

const Tiles = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-darkBlue">
            <section className="container mx-auto py-12 pt-2 text-center">
                <main className="flex-grow">
                    <div className="font-jost flex flex-wrap justify-center gap-2 items-center">
                        {tiles.map((tile, index) => (
                            <div key={tile.id} className="tile-hover-effect fade-in-top" style={{ animationDelay: `${index * 0.2}s` }}>
                                <Tile url={tile.url} title={tile.title} icon={tile.icon} />
                            </div>
                        ))}
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Tiles;