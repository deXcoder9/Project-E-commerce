import { Swiper, SwiperSlide } from "swiper/react";
import "./bannerSlider.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div>
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 1000,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper w-[500px]"
      >
        <SwiperSlide>
        <img
          src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="laptop image"
        />
        </SwiperSlide>
        <SwiperSlide>
        <img
          src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="laptop image"
        />
        </SwiperSlide>
        <SwiperSlide>
        <img
          src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="laptop image"
        />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
