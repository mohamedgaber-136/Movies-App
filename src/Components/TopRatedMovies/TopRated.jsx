import React, { memo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import "./style.css";
import CarouselCard from "../CarouselCard/CarouselCard";
const TopRated = memo(({ data, imgPath }) => {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {data.map((ele, ind) => (
        <SwiperSlide key={ind}>
          <CarouselCard
            imgPath={imgPath}
            img={ele.poster_path}
            release={ele.release_date}
            title={ele.title}
            id={ele.id}
            overview={ele.overview}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});
export default TopRated;
