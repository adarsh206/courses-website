/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { forwardRef } from 'react';



const DifficultyLevel = ({difficulty}) => {
  let spans = [], index = 0;
  index = difficulty.toLowerCase() === "beginner" ? 1 : difficulty.toLowerCase() === "intermediate" ? 2 : 3;
  
  for(let i = 0; i < 3; i++){
    spans.push(
      <span key={i} className={`${i < index ? "active" : ""} block w-1 h-2 rounded-[1px] bg-white`}></span>
    )
  }
  return(
      <>{spans}</>
  );
}

const Course = forwardRef(({id, title, category, difficulty, thumbnail, instructor: { name, pic }, rating }, ref) => {
  return   <div 
    className='group relative h-[250px] border-[1.5px] border-solid border-transparent rounded-4xl overflow-hidden transition-colors duration-300'
    ref={ref} 
    data-id={id} 
    data-category={category.toLowerCase()}
    data-difficulty={difficulty.toLowerCase()}>
    <div className='w-full h-full'>
        <img src={thumbnail} alt={title}/>
    </div>
    <div className='absolute bottom-0 inset-x-0 h-24 p-2 m-2 bg-white border-solid border-[1.5px] border-transparent rounded-3xl transition-colors duration-300 group-hover:border-gray-10'>
        <a href='#' className='flex flex-col justify-between h-full'
        title={title}>
          {/** Course Title */}
          <div className='flex justify-between gap-4'>
              <p className='text-lg font-medium text-gray-10 whitespace-nowrap text-ellipsis overflow-hidden'> 
                {title}
              </p>
              <div className='flex items-center gap-4 rounded-md p-1 h-fit bg-[var(--bg-alpha-35)]'>
                  <p className="text-sm font-semibold text-gray-10 !leading-[normal]">{difficulty}</p>
                  <div className='flex items-end gap-x-0.5'>
                      <DifficultyLevel difficulty={difficulty}/>
                  </div>
              </div>
          </div>
        </a>
    </div>
    </div>
  
});

export default Course;