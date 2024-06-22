import { useEffect, useState } from "react";
import Navbar from '../Navbar';

function Character() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log("Error in datafetching", error));
    }, []);

    //Having trouble displaying data from api onto the webpage, I see how to see them in the console but cannot figure out how to see it on the webpage
    console.log(data)
    const dataResults = console.log(data.results)
    console.log(data.results[0])

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <h2>{dataResults}</h2>

            {/* <ul>
                {data.map((results) => {
                    <li key={results.id}>{results.name}</li>
                })}
            </ul> */}
        </div>
    )
}

export default Character