import { useState, useEffect} from 'react';
// import { NIFTY_FIN_API } from './constants';

const useNiftyFinServ = () => {
    const [marketData, setMarketData] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            getMyData();
        }, 4000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    // *****THIS IS NSE API *****
    
    // const getMyData = async () => {
    //     const url = NIFTY_FIN_API;
        
    //     try {
    //         const response = await fetch(url);
    //         const result = await response.json();
    //         setMarketData(result.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // *****THIS IS RAPID API *****

    const getMyData = async () => {
        const url = 'https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%20FIN%20SERVICE';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c560269410mshb8694d846f9f12ep16ace2jsn46bafcf6c5c5',
		'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setMarketData(result);
} catch (error) {
	console.error(error);
}
    };

    return {marketData};
}

export default useNiftyFinServ;