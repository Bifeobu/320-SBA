import { useEffect, useState } from "react";
import Navbar from '../Navbar';

function Episode() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log("Error in datafetching", error));
    }, [])

    console.log(data);
    console.log(data.results);

    return (
        <div>
            <Navbar/>
            <h1>Rick and Morty Episodes</h1>
        </div>
    )
}

export default Episode