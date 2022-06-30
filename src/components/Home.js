import React from "react";
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

    function handleCharacterClick() {
        history.push('/characters');
    }

    function handleNationClick() {
        history.push('/nations');
    } 

    return(
        <div>
            <img
                onClick={handleCharacterClick}
                className="homeImages"
                src="https://hips.hearstapps.com/hmg-prod/images/mgid-arc-content-nick-1590088176.jpeg"
                alt="Map of the Four Nations"
            />
            <img
                onClick={handleNationClick}
                className="homeImages"
                src="https://preview.redd.it/czhksazlo9361.jpg?auto=webp&s=84417b26926ff148aa39435a75f1e052dd9b44a1"
                alt="Map of the Four Nations"
            />
            <p className="homePara" id="first"> 
                The world is divided into four elemental nations: The Northern and Southern Water Tribes, the Earth Kingdom, the Fire Nation, and the Air Nomads. 
                The Avatar upholds the balance between the nations, but everything changed when the Fire Nation invaded. Only the Avatar, master of all four elements, 
                can stop them. But when the world needs him most, he vanishes. A hundred years later Katara and Sokka discover the new Avatar, an airbender named Aang. 
                Together they must help Aang master the elements and save the world.
            </p>
            <img
                className="backgroundPic"
                src="https://images.squarespace-cdn.com/content/v1/5ecffbcb034857480517457a/1590688716161-D5WH08VB9YJ57VJOPQPL/ayi-taishan-village1_web.jpg"
                alt="The Gang Relaxing"
            />
            <h2 className="pageHeaders">Show Details</h2>
            <p className="homePara"> 
                <strong>Number of Seasons:</strong> 3 <br></br>
                <strong>Number of Epsiodes:</strong> 61 <br></br>
                <strong>The Four Elements:</strong> Fire, Water, Air and Earth <br></br>
                <strong>Main Characters:</strong> Aang, Katara, Sokka, Toph, Zuko and Uncle Iroh are the main characters we follow throughout the series <br></br>
                <strong>Dates Aired:</strong> February 21, 2005 to July 19, 2008 <br></br>
                <strong>Influences:</strong> The series is notable for borrowing extensively from East Asian art and mythology for its universe. <br></br>
                <strong>Genres:</strong> Fantasy, Coming of Age <br></br>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Home;