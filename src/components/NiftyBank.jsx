import React from 'react'
import useNiftyBank from '../utils/useNiftyBank'
import Loader from './Loader';

const NiftyBank = () => {
  const {marketData} = useNiftyBank();

  return !marketData ? <div className='w-full min-h-screen flex justify-center items-start mt-8'><Loader/></div> : (
    <div className='w-11/12 mx-auto overflow-x-auto'>
    <table className="border-collapse border border-slate-500 my-8 w-11/12 mx-auto h-full text-xs">
    <thead className='h-12 sticky top-0 z-10'>
        <tr className='bg-[#3A2D7D] text-white border border-slate-600 text-right'>
            <th className='bg-[#3A2D7D] text-left pl-4 sticky left-0'>SYMBOL</th>
            <th className='pr-8'>LTP</th>
            <th className='pr-8'>CHNG</th>
            <th className='pr-8'>%CHNG</th>
            <th className='pr-8'>OPEN</th>
            <th className='pr-8'>HIGH</th>
            <th className='pr-8'>LOW</th>
            <th className='pr-8'>Y. LOW</th>
            <th className='pr-8'>Y. HIGH</th>
            <th className='pr-8'>PRE. CLOSE</th>
            <th className='pr-8'>VOLUME shares</th>
            <th className='pr-8'>VALUE lakhs</th>
            <th className='pr-8'>%CHNG 365D</th>
            <th className='pr-8'>%CHNG 30D</th>
        </tr>
    </thead>
    <tbody className='divide-y divide-slate-600'>
        {
            marketData?.map(({symbol, lastPrice, change, pChange, open, dayHigh, dayLow, yearHigh, yearLow, previousClose, totalTradedValue, totalTradedVolume, perChange30d, perChange365d, chartTodayPath}, index) => {
                return (
                    <tr className=' bg-[#E8E8E8] h-8' key={index}>
                    <td className='bg-[#E8E8E8] text-left pl-4 sticky left-0 z-10'>{symbol}</td>
                    <td className='font-bold text-right pr-8'>{lastPrice?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{change?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{pChange?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{open?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{dayHigh?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{dayLow?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{yearLow?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{yearHigh?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{previousClose?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{totalTradedVolume?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{totalTradedValue?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{perChange365d?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-8'>{perChange30d?.toLocaleString("en-IN")}</td>
                </tr>
                )
            })
        }
    </tbody>
</table>
</div>
  )
}

export default NiftyBank;