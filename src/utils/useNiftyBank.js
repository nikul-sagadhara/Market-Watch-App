import { useState, useEffect } from 'react';
import { NIFTY_BANK_API } from './constants';

const useNiftyBank = () => {
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
        const url = NIFTY_BANK_API;
        
        try {
            const response = await fetch(url);
            const result = await response.json();
            setMarketData(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

//     const getMyData = async () => {
//         const url = 'https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%20BANK';
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

export default useNiftyBank;