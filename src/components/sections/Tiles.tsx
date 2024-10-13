import Tile from "@/components/Tile";
import { tiles } from "@/consts";

const Tiles = () => {
    return (
        <div className='bg-darkBlue'>
            <section className="container py-12 text-center mx-auto">
                <main className="flex-grow">
                    <div className="font-jost flex flex-wrap custom-gap gap-2 items-center">
                        {tiles.map((tile, index) => (
                            <div key={tile.id} className={`tile-hover-effect ${index >= tiles.length - (tiles.length % 3) ? 'justify-start' : 'justify-center'}`}>
                                <Tile title={tile.title} description={tile.description} icon={tile.icon} />
                            </div>
                        ))}
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Tiles;