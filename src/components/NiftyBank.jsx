import React from 'react'
import useNiftyBank from '../utils/useNiftyBank'
import Loader from './Loader';

const NiftyBank = () => {
  const {marketData} = useNiftyBank();

  return !marketData ? <div className='w-full min-h-screen flex justify-center items-start mt-8'><Loader/></div> : (
    <table className="table-auto border-collapse border border-slate-500 w-11/12 mx-auto my-8">
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
          <th className=''>%CHNG 30D</th>
          <th className='pr-4'>C. TODAY</th>

        </tr>
      </thead>
      <tbody>
        {
            marketData?.map(({symbol, lastPrice, change, pChange, open, dayHigh, dayLow, yearHigh, yearLow, previousClose, totalTradedValue, totalTradedVolume, perChange30d, perChange365d, chartTodayPath}, index) => {
                return (
                    <tr className='border border-slate-600 bg-[#E8E8E8] h-8' key={index}>
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
                    <td className='text-right'>{perChange30d?.toLocaleString("en-IN")}</td>
                    <td className='float-right pr-4'><img className='w-full max-w-[50px]' src={chartTodayPath} alt="chart" /></td>
                </tr>
                )
            })
        }
    </tbody>
</table>
  )
}

export default NiftyBank;