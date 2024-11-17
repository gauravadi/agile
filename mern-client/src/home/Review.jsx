import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from "flowbite-react";
import proPic from '../assets/profile.jpg';
//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
        <p className="text-5xl font-bold text-center mb-10 leading-snug"></p>
        <h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className="mt-7">
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae ipsa quam laudantium facere iure obcaecati beatae facilis omnis. Similique saepe, voluptas odio sequi repellat iste quaerat enim rerum animi?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>      
                    <h5 className="text-lg font-medium">person 1</h5>
                    <p className="text-base">CEO of ABC</p>         
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className="mt-7">
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae ipsa quam laudantium facere iure obcaecati beatae facilis omnis. Similique saepe, voluptas odio sequi repellat iste quaerat enim rerum animi?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>      
                    <h5 className="text-lg font-medium">person 2</h5>
                    <p className="text-base">CEO of ABC</p>         
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className="mt-7">
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae ipsa quam laudantium facere iure obcaecati beatae facilis omnis. Similique saepe, voluptas odio sequi repellat iste quaerat enim rerum animi?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>      
                    <h5 className="text-lg font-medium">person 3</h5>
                    <p className="text-base">CEO of ABC</p>         
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className="mt-7">
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae ipsa quam laudantium facere iure obcaecati beatae facilis omnis. Similique saepe, voluptas odio sequi repellat iste quaerat enim rerum animi?</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>      
                    <h5 className="text-lg font-medium">person 4</h5>
                    <p className="text-base">CEO of ABC</p>         
                </div>
            </div>
        </SwiperSlide>
      
      </Swiper>
        </h2>
    </div>

  )
}

export default Review