import { useEffect, useState } from "react";
import Header from '../../Header';
import Navbar from '../Navbar';

const BASE_URL = 'https://rickandmortyapi.com/api';

function Home() {
    const [data, setData] = useState("null");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    } else {
        return <div>
            <Navbar />
            <Header />
            <h1>{data}</h1>

        </div>
    };

    // const loaded = () => {
    //     return (
    //         <div>
    //             <h1>{data}</h1>
    //         </div>
    //     );
    // };

    // const loading = () => {
    //     return <h1>Loading...</h1>
    // };

    // return data ? loaded() : loading();

//     return ( <>
//             <Navbar />
//             <Header />
//         </>
//     )
};

export default Home