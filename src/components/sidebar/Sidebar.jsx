// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination, EffectFade, Autoplay, } from "swiper";


import React from 'react'
import images from "../../dummy-files/sidebarImages.json"
import c from "./Sidebar.module.css"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const Sidebar = () => {
  return (
    <div className={c.sidebar}>
      <div className="container">
        <div className={c.sidebar_wrapper}>
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: `.prev-btn`,
              nextEl: `.next-btn`
            }}
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            loop={true}
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            className="mySwiper">
            {images.map((img, index) =>
              <SwiperSlide className={c.sidebar_slide} key={index}>
                <img src={img} alt="" />
              </SwiperSlide>
            )}
          </Swiper>
          <button className={`prev-btn`}>
            <FiChevronLeft />
          </button>
          <button className={`next-btn`}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar




