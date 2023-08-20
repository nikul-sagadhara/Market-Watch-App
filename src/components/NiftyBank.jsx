import React from 'react'
import useNiftyBank from '../utils/useNiftyBank'
import Loader from './Loader';

const NiftyBank = () => {
  const {marketData} = useNiftyBank();

  return !marketData ? <div className='w-full min-h-screen flex justify-center items-start mt-8'><Loader/></div> : (
    <div className='w-11/12 mx-auto overflow-auto'>
    <table className="table-auto border-collapse border border-slate-500 my-8 w-full text-xs">
    <thead className='h-12'>
        <tr className='bg-[#3A2D7D] text-white border border-slate-600 text-right'>
            <th className='text-left pl-4'>SYMBOL</th>
            <th className=''>LTP</th>
            <th className=''>CHNG</th>
            <th className=''>%CHNG</th>
            <th className=''>OPEN</th>
            <th className=''>HIGH</th>
            <th className=''>LOW</th>
            <th className=''>Y. LOW</th>
            <th className=''>Y. HIGH</th>
            <th className=''>PRE. CLOSE</th>
            <th className=''>VOLUME shares</th>
            <th className=''>VALUE lakhs</th>
            <th className=''>%CHNG 365D</th>
            <th className='pr-4'>%CHNG 30D</th>
        </tr>
    </thead>
    <tbody className='divide-y divide-slate-600'>
        {
            marketData?.map(({symbol, lastPrice, change, pChange, open, dayHigh, dayLow, yearHigh, yearLow, previousClose, totalTradedValue, totalTradedVolume, perChange30d, perChange365d, chartTodayPath}, index) => {
                return (
                    <tr className=' bg-[#E8E8E8] h-8' key={index}>
                    <td className='text-left pl-4'>{symbol}</td>
                    <td className='font-bold text-right'>{lastPrice?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{change?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{pChange?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{open?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{dayHigh?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{dayLow?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{yearLow?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{yearHigh?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{previousClose?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{totalTradedVolume?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{totalTradedValue?.toLocaleString("en-IN")}</td>
                    <td className='text-right'>{perChange365d?.toLocaleString("en-IN")}</td>
                    <td className='text-right pr-4'>{perChange30d?.toLocaleString("en-IN")}</td>
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