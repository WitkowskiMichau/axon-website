import Tile from "@/components/Tile";
import {tiles} from "@/consts";

const Tiles = () => {
    return (
        <div className='bg-darkBlue'>
            <section className="container py-12 text-center mx-auto">
                <main className="flex-grow">
                    <div className="    font-jost flex flex-wrap custom-gap justify-center gap-2 items-center">
                        {tiles.map((tile) => (
                            <div key={tile.id} className="tile-hover-effect">
                                <Tile id={tile.id} title={tile.title} description={tile.description} icon={tile.icon}
                                      url={tile.url}/>
                            </div>
                        ))}
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Tiles;