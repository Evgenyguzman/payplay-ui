import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import React from "react";
import Card from "components/Home/Card/Card";

interface Props {
  onStart?: () => void;
}

const Slider = ({ onStart }: Props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ padding: 50 }}
    >
      <SwiperSlide>
        <Card title="COMPETITIVE" onStart={onStart} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="COMPETITIVE" onStart={onStart} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="COMPETITIVE" onStart={onStart} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
