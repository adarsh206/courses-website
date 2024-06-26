/* eslint-disable no-unused-vars */
import React from 'react';
import {hero01, hero02, hero03, roundedText } from "../constants/images.js";
import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "../constants/motion.js";

const Hero = () => {
  return (
    <section id='home' className='flex items-center'>
        <div className='container flex items-center justify-center'>
            <div className='flex justify-between items-center flex-col-reverse lg:flex-row pt-[70px] lg:pt-0 gap-8'>
                {/** Left Side */}
                <motion.div 
                variants={leftSideVariants}
                initial="hidden"
                animate="visible"
                className='flex flex-col gap-y-8 items-center lg:items-start text-center lg:text-start'>
                  <div className='flex flex-col gap-y-4'>
                    <h2 className='section-title-before section-title-after text-h1 text-orange-600'>
                            Unlock Your Skills With Our Diverse And Meaningful Online Courses
                    </h2>
                    <p>
                      Explore a world of knowledge and skills at your fingertips, from business and technology to the arts and beyond
                    </p>
                  </div>
                  <button type='button' className='btn bg-orange-500 hover:bg-orange-400'>Get Started</button>
                </motion.div>
                {/** Right Side */}
                <motion.div
                variants={rightSideVariants}
                initial="hidden"
                animate="visible"
                 className="relative">
                  <div className='grid grid-cols-[minmax(70px,_230px)_minmax(70px,_250px)] grid-rows-[auto_auto] sm:grid-cols-[240px_270px]
                   sm:grid-rows-[220px_220px] xl:grid-cols-[270px_300px] xl:grid-rows-[250px_250px] gap-4'> 
                        <img src={hero02} className='rounded-4xl'/>
                        <img src={hero01} className='rounded-4xl row-span-2 object-center'/>
                        <img src={hero03} className='rounded-4xl'/>
                  </div>
                  <div className='hidden sm:block w-[120px] h-[120px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-[calc(50%-15px)]'>
                    <img src={roundedText} alt='Explore More'/>
                  </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero