import { useEffect, useState } from "react";

const BASE_URL = 'https://rickandmortyapi.com/api';

function ApiFetch() {
    const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(false);

    
        const getData = async () => {
            // setIsLoading(true);
            try {
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (e) {
                console.error(e);
            } 
            // finally {
            //     setIsLoading(false);
            // }

        };

    useEffect(() => {
        getData();
    }, []);

//     if (isLoading) {
//         return <h1>Loading...</h1>
//     } else {
//         return <div>
//             <Navbar />
//             <Header />
//             <h1>{data}</h1>

//         </div>
//     };

    const loaded = () => {
        return (
            <div>
                <h1>{data}</h1>
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return data ? loaded() : loading();

};

export default ApiFetch