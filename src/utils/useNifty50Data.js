import { useState, useEffect } from 'react';
import { NIFTY50_API } from './constants';

const useNifty50Data = () => {
    const [marketData, setMarketData] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            getMyData();
            console.log("timer");
        }, 4000)

        return () => {
            clearInterval(timer);
            console.log("return");
        }
    }, [])

    const getMyData = async () => {
        const url = NIFTY50_API;
        
        try {
            const response = await fetch(url);
            const result = await response.json();
            setMarketData(result.data);
        } catch (error) {
            console.error(error);
        }
    }

//     const getMyData = async () => {
//         const url = 'https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c560269410mshb8694d846f9f12ep16ace2jsn46bafcf6c5c5',
// 		'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
//     setMarketData(result);
// } catch (error) {
// 	console.error(error);
// }
//     };

    return {marketData};


}

export default useNifty50Data;