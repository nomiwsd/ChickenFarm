import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLeaf,
  faMap,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HeroSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index);
  };

  const accordionData = [
    {
      headertitle: "We Farm Chickens ethically and profitably",
      title: `Let's Recycle Everything`,
      icon: faRecycle,
      content: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non`,
    },
    {
      headertitle: "We choose the right beeding for better broilers",
      title: `Let's Protect Mother Earth`,
      icon: faLeaf,
      content: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non`,
    },
    {
        headertitle: "Our Call, anytime ,anywhere!",
      title: `You’ve got questions now.`,
      icon: faMap,
      content: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non`,
    },
  ];
  return (
    <section>
      <Carousel
        responsive={responsive}
        autoPlay={500}
        infinite={true}
        className="z-10"
      >
        <div className="slide_1 relative">
          <div className="absolute top-20 left-[10%] flex flex-col gap-6">
            <h1 className="text-7xl font-black uppercase font-opensans text-white">
              Poultry Performances & Productivity Challenges
            </h1>
            <hr className="w-16 bg-[#00BBFF] border-[#00BBFF] h-1" />
            <p className="text-3xl font-thin font-opensans text-white">
              We make it a priority to offer flexible <br /> services to
              accomodate your needs
            </p>
            <button className="bg-btncl text-md font-medium uppercase text-white py-4 px-6 w-52 hover:bg-slate-900">
              Get A Quote Now
            </button>
          </div>
        </div>
        <div className="slide_2">
          <div className="absolute top-20 left-[10%] flex flex-col gap-6">
            <h1 className="text-7xl font-black uppercase font-opensans text-white">
              We Farm Chickens <br /> Ethically and Profitably
            </h1>
            <hr className="w-16 bg-[#00BBFF] border-[#00BBFF] h-1" />
            <p className="text-3xl font-thin font-opensans text-white">
              We make it a priority to offer flexible <br /> services to
              accomodate your needs
            </p>
            <button className="bg-btncl text-md font-medium uppercase text-white py-4 px-6 w-52 hover:bg-slate-900">
              Get A Quote Now
            </button>
          </div>
        </div>
      </Carousel>
      <div>
        <div className="flex justify-around items-center accordianbg">
          <div className="w-2/4 p-4">
            <div>
              {activeIndex !== null && (
                <>
                  <div className="flex flex-col gap-5 py-20">
                    <h2 className="text-5xl font-medium font-opensans">
                      {accordionData[activeIndex].title}
                    </h2>
                    <hr className="w-20 bg-[#DB4436] border-[#DB4436] h-1" />
                    <p className="text-lg font-normal font-opensans ">
                      {accordionData[activeIndex].content}
                    </p>
                    <button className="bg-primarycl text-white text-base font-semibold font-opensans w-36 rounded-md py-3 px-3">
                      See More
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                  </div>
                </>
              )}
            </div>
            {/* Pagination controls as radio buttons */}
            <div className="flex justify-center items-center gap-2">
            <label
              className={`cursor-pointer pagination-item ${
                activeIndex === 0
                  ? "border-[#f79468] !outline-none"
                  : "text-white"
              }`}
            >
              <input
                type="radio"
                name="accordion-pagination"
                checked={activeIndex === 0}
                onChange={() => toggleAccordion(0)}
              />
            </label>
            <label
              className={`cursor-pointer pagination-item ${
                activeIndex === 1
                  ? " border-[#f79468]"
                  : " text-white"
              }`}
            >
              <input
                type="radio"
                name="accordion-pagination"
                checked={activeIndex === 1}
                onChange={() => toggleAccordion(1)}
              />
            </label>
            <label
              className={`cursor-pointer pagination-item ${
                activeIndex === 2
                  ? "radiobtn"
                  : "simpleradiobtn"
              }`}
            >
              <input
                type="radio"
                name="accordion-pagination"
                checked={activeIndex === 2}
                onChange={() => toggleAccordion(2)}
              />
            </label>
            </div>
          </div>
          <div className="w-[30%] h-full max-w-screen-2xl">
            <div
              className={`cursor-pointer  ${
                activeIndex === 0
                  ? "bg-primarycl border-primarycl text-white text-sm font-medium accordian_header "
                  : "accordian text-[#666] bg-[#FFFFFFCC]"
              }`}
              onClick={() => toggleAccordion(0)}
            >
              <div className="flex justify-start items-center gap-3">
                <FontAwesomeIcon icon={accordionData[0].icon} />
                <span className="">{accordionData[0].headertitle}</span>
              </div>
            </div>
            <div
              className={`cursor-pointer ${
                activeIndex === 1
                  ? "bg-primarycl border-primarycl text-white text-sm font-medium accordian_header "
                  : "accordian text-[#666] text-sm bg-[#FFFFFFCC]"
              }`}
              onClick={() => toggleAccordion(1)}
            >
              <div className="flex justify-start items-center gap-3">
                <FontAwesomeIcon icon={accordionData[1].icon} />{" "}
                <span className="">{accordionData[1].headertitle}</span>
              </div>
            </div>
            <div
              className={`cursor-pointer ${
                activeIndex === 2
                  ? "bg-primarycl border-primarycl text-white text-sm font-medium accordian_header "
                  : "accordian text-[#666] bg-[#FFFFFFCC]"
              }`}
              onClick={() => toggleAccordion(2)}
            >
              <div className="flex justify-start items-center gap-3">
                <FontAwesomeIcon icon={accordionData[2].icon} />
                <span className="">{accordionData[2].headertitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
