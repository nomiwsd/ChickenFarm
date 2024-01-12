/* eslint-disable no-undef */
import mainimg from "../../assets/mainimg.jpg";
import upperimg from "../../assets/upperimg.jpg";
import lowerimg from "../../assets/lowerimg.jpg";
import { testimonaildata } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

const AboutUs = () => {
  return (
    <section>
      <div className="py-32 px-24">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl font-opensans font-semibold">About Us</h1>
          <p className="text-3xl font-opensans font-extralight ">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 my-10">
          <img src={mainimg} alt="" />
          <div className="flex flex-col gap-5">
            <img src={upperimg} alt="" className="w-full h-full" />
            <img src={lowerimg} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col justify-start items-start gap-10">
            <p className="text-base font-opensans font-normal leading-6 text-[#999999]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Proin facilisis, velit non fringilla
              pharetra,
            </p>
            <p className="text-base font-opensans font-normal leading-6 text-[#999999]">
              Elit odio tincidunt mi, non Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Proin
              facilisis, velit non fringilla pharetra, elit odio tincidunt mi,
              non Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Proin facilisis, velit non
              fringilla pharetra, elit odio tincidunt mi, non Vestibulum ante
            </p>
            <h3 className="text-base font-opensans font-extrabold leading-6 text-[#020202] capitalize ">
              Do You Need Fresh And Healthy Meat?
            </h3>
            <div className="flex flex-col gap-2">
              <h4 className="capatilize text-base font-opensans font-semibold text-primarycl ">
                View Our Meat
              </h4>
              <h4 className="capatilize text-base font-opensans font-semibold text-primarycl ">
                View Our Services
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen testimonialbg bg-cover bg-no-repeat py-40">
        <div className=" flex flex-col justify-center items-center gap-5">
          <hr className="w-20 bg-primarycl border-primarycl h-1" />
          <h1 className="text-5xl font-opensans font-semibold leading-9">
            Some Nice Words
          </h1>
        </div>
        <div className="px-24 py-16">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {testimonaildata &&
              testimonaildata.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-8"
                >
                  <div className="flex flex-col  justify-center items-center">
                    <div>
                      <img src={item.Image} alt="" className="rounded-full" />
                    </div>
                    <h2 className="capatalize text-lg font-black font-montserrat text-[#2d2d2d]">
                      {item.clientname}{" "}
                    </h2>
                  </div>
                  <div className="bg-white py-10 px-4">
                    <p className="text-base font-opensans font-light leading-6 text-black ">
                      {item.clientfeedback}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
