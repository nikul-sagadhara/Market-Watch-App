import React, { useEffect, useState } from 'react'
import { NIFTY50_API } from '../utils/constants';

const MarketStatus = () => {
    const [marketData, setMarketData] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            getMyData();
        }, 2000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    const getMyData = async () => {
        const url = NIFTY50_API;
        
        try {
            const response = await fetch(url);
            const result = await response.json();
            setMarketData(result?.marketStatus?.marketStatusMessage);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='flex gap-2 text-xs'> <h1 className='font-semibold'>Market Status:</h1> <i>{marketData}</i></div>
  )
}

export default MarketStatus;