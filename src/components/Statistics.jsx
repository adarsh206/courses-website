/* eslint-disable no-unused-vars */
import React from 'react'
import { statistics } from "../constants/index.js";

const Statistics = () => {
  return <div className='py-[70px]'>
        <div className="container">
          <div className='flex justify-center lg:justify-between items-start flex-wrap gap-8
          rounded-4xl bg-gray-10 py-14 px-20'>
            {statistics.map((stat, index) =>(
              <div key={index} className='w-[145px] flex flex-col items-center gap-y-4'>
                <h1 className='text-h1 text-primary-50'>
                    {stat.number}
                </h1>
                <p className='text-xl text-center text-gray-90'>
                  {stat.text}
                </p>
              </div>
           ))}
          </div>
        </div>
  </div>
}

export default Statistics