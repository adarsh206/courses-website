/* eslint-disable no-unused-vars */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import {register} from "swiper/element/bundle";
import "swiper/css";
import { courses } from "../constants/index.js";
import  Course  from "../components/Course";

register();

const PopularCourses = () => {
  return (
    <section id='popular'>
        <div className='container'>
            <div className='flex flex-col gap-y-24'>
                <SectionHeader 
                title="Explore Most Popular Our Courses" 
                link="#"/>
                <div className='flex flex-col gap-y-4'>
                    <swiper-container>
                        {courses.map((course) => {
                            if(course.rating >= 4.8){
                                return (
                                    <swiper-slide key={course.id}>
                                        <Course 
                                        id={course.id} 
                                        title={course.title}
                                        category={course.category}
                                        difficulty={course.difficulty}
                                        thumbnail={course.thumbnail}
                                        instructor = {{name: course.instructor.name, pic: course.instructor.pic}}
                                        rating={course.rating}
                                        />
                                    </swiper-slide>
                                )
                            }
                        })}
                    </swiper-container>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularCourses