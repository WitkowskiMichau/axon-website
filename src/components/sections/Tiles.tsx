import Tile from "@/components/Tile";
import { tiles } from "@/consts";

const Tiles = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-darkBlue">
            <section className="container py-12 text-center mx-auto">
                <main className="flex-grow">
                    <div className="font-jost flex flex-wrap custom-gap gap-2 items-center">
                        {tiles.map((tile, index) => (
                            <div key={tile.id} className="tile-hover-effect fade-in-top" style={{ animationDelay: `${index * 0.2}s` }}>
                                <Tile url={tile.url} title={tile.title} description={tile.description} icon={tile.icon} />
                            </div>
                        ))}
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Tiles;