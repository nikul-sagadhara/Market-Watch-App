import React, { useState, useEffect } from 'react'

const Crypto = () => {
    const [cryptoData, setCryptoData] = useState();

    useEffect(() => {
        getMyData();
    }, [])

    const getMyData = async () => {
        const url = 'https://twelve-data1.p.rapidapi.com/price?symbol=ETH%2FBTC&format=json&outputsize=30';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c560269410mshb8694d846f9f12ep16ace2jsn46bafcf6c5c5',
                'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setCryptoData(result)
        } catch (error) {
            console.error(error);
        }
}

return (
    <div>{cryptoData?.price}</div>
    )
}
    export default Crypto;