/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import { register } from 'swiper/element'
import { blogs } from '../constants';
import Blog from '../components/Blog';
import SliderNavigation from '../components/SliderNavigation';
import { motion } from 'framer-motion';
import { centerVariants } from '../constants/motion';

register();

const Blogs = () => {

    const sliderRef = useRef(null);
    const swiperParams = {
        spaceBetween: 16,
        grabCursor: true,
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    };

    useEffect(() => {
        sliderRef.current && Object.assign(sliderRef.current, swiperParams);
    }, []);

  return (
    <section id='blog'>
        <div className='container'>
            <div className='flex flex-col gap-y-24'>
                <SectionHeader  title="Insights & knowledge Hub" link="#"/>
                <motion.div 
                variants={centerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "0px 0px -200px 0px", once: true }}
                className='flex flex-col gap-y-4'>
                    <swiper-container ref={sliderRef}>
                            {blogs.map((blog) => (
                                <swiper-slide key={blog.id}>
                                    <Blog 
                                    id={blog.id}
                                    title={blog.title}
                                    desc={blog.description}
                                    thumbnail={blog.thumbnail}
                                    />
                                </swiper-slide>
                            ))}
                    </swiper-container>
                    <SliderNavigation ref={sliderRef}/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Blogs