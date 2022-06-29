import React from "react";

function Home() {
    return(
        <div>
            <h2 className="pageHeaders">Quick Summary</h2>
            <p className="homePara"> 
                The world is divided into four elemental nations: The Northern and Southern Water Tribes, the Earth Kingdom, the Fire Nation, and the Air Nomads. 
                The Avatar upholds the balance between the nations, but everything changed when the Fire Nation invaded. Only the Avatar, master of all four elements, 
                can stop them. But when the world needs him most, he vanishes. A hundred years later Katara and Sokka discover the new Avatar, an airbender named Aang. 
                Together they must help Aang master the elements and save the world.
            </p>
            <img
                id="map"
                src="https://preview.redd.it/czhksazlo9361.jpg?auto=webp&s=84417b26926ff148aa39435a75f1e052dd9b44a1"
                alt="Map of the Four Nations"
            />
            <h2 className="pageHeaders">Show Details</h2>
            <p className="homePara"> 
                <strong>Number of Seasons:</strong> 3 <br></br>
                <strong>Number of Epsiodes:</strong> 61 <br></br>
                <strong>The Four Elements:</strong> Fire, Water, Air and Earth <br></br>
                <strong>Main Characters:</strong> Aang, Katara, Sokka, Toph, Zuko and Uncle Iroh are the main characters we follow throughout the series <br></br>
            </p>
        </div>
    );
}

export default Home;