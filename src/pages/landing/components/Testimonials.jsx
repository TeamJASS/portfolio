import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "PortiBuilder made it so easy to create my professional portfolio. I landed my dream job thanks to it!",
    name: "Jane Doe",
  },
  {
    quote:
      "The customizable templates are fantastic. I was able to showcase my skills perfectly.",
    name: "John Smith",
  },
  {
    quote:
      "The user-friendly dashboard is a game-changer. Highly recommend PortiBuilder!",
    name: "Sarah Lee",
  },
  {
    quote:
      "The user-friendly dashboard is a game-changer. Highly recommend PortiBuilder!",
    name: "Sarah Lee",
  },
  {
    quote:
      "The user-friendly dashboard is a game-changer. Highly recommend PortiBuilder!",
    name: "Sarah Lee",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-20" id="testimonials">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
          What Our Users Say
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper h-[200px]"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <p className="text-lg text-gray-700 mb-4">
                  {testimonial.quote}
                </p>
                <p className="text-gray-900 font-semibold">
                  {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="flex justify-center mt-12"> */}
        <p className="text-right underline text-blue-800 my-8 font-semibold">
          <Link to="/">See More</Link>
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
