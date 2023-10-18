import React, { memo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../carousel-item/carousel-item";

const CarouselSection = ({ list, onCarouselChange }) => {
  return (
    <>
    
    <Carousel
      className=" object-fit-cover "
     
      interval={4000}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      stopOnHover
      infiniteLoop
      dynamicHeight
      onChange={onCarouselChange}
    >
      {list.map((movie) => (
        <CarouselItem key={movie.id} movie={movie} />
      ))}
    </Carousel>
      </>
  );
};

export default memo(CarouselSection);
