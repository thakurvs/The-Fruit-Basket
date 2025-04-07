import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image1 from "../../assets/health.jpg"
import Image2 from "../../assets/nutrition.jpg";
import Image3 from "../../assets/nourishment.jpg";
import Image4 from "../../assets/fresh-fruits.jpg";
import Image5 from "../../assets/farms.jpg";
import Image6 from "../../assets/organic.jpg";

const slides = [
    { img: Image1, title: "Healthy Living", desc: "Eat fresh, stay healthy!" },
    { img: Image2, title: "Nutritional Diet", desc: "Balanced nutrition for a better life." },
    { img: Image3, title: "Nourishment", desc: "Wholesome foods for a stronger body." },
    { img: Image4, title: "Fresh Fruits", desc: "Farm-fresh fruits, full of vitamins!" },
    { img: Image5, title: "Farm Fresh", desc: "Straight from the farm to your plate." },
    { img: Image6, title: "Organic Goodness", desc: "Pure and organic food for all." },
];

const Carousel = () => {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-6">Enjoy Fresh & Healthy Living</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-lg shadow-lg"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <img src={slide.img} alt={slide.title} className="w-full h-[300px] object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-4xl font-bold">{slide.title}</h3>
                  <p className="text-xl">{slide.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };
  
  export default Carousel;