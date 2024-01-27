import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLeaf,
  faMap,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { useState, useEffect } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index);
  };

  const accordionData = [
    {
      headertitle: "We Farm Chickens ethically and profitably",
      title: `Let's Recycle Everything`,
      icon: faRecycle,
      content: `Taking all measures to ensure good quality of feed, Day old chicks, medicines and other products being used by farmers 
      `,
    },
    {
      headertitle: "We choose the right beeding for better broilers",
      title: `Let's Protect Mother Earth`,
      icon: faLeaf,
      content: `Consumer education through seminars and awareness session to enhance consumption of cheap source of protein `,
    },
    {
        headertitle: "Our Call, anytime ,anywhere!",
      title: `You’ve got questions now.`,
      icon: faMap,
      content: `Using social, electronic and print media to achieve the elegant service from us`,
    },
  ];
  return (
    <section>
      <Carousel
        responsive={responsive}
        arrows={windowWidth >= 768 ? true : false}
        autoPlay={500}
        infinite={true}
        className="z-10 h-64 w-full md:min-h-screen"
      >
        <div className="slide_1 relative min-h-screen">
          <div className="absolute left-[5%] top-[35%] md:left-[10%] md:top-1/4 flex flex-col justify-center items-start gap-2 md:gap-6">
            <h1 className="text-base md:text-4xl lg:text-5xl xl:text-7xl font-bold md:font-black uppercase font-opensans text-white">
              Poultry Performances & Productivity Challenges
            </h1>
            <hr className="w-16 bg-[#00BBFF] border-[#00BBFF] h-1" />
            <p className="text-sm md:text-3xl font-thin font-opensans text-white">
              We make it a priority to offer flexible <br /> services to
              accomodate your needs
            </p>
            <button className="bg-btncl text-md font-medium uppercase text-white px-3 py-2 md:py-4 md:px-6 w-52 hover:bg-slate-900">
              Get A Quote Now
            </button>
          </div>
        </div>
        <div className="slide_2 relative min-h-screen">
          <div className="absolute left-[5%] top-[35%] md:left-[10%] md:top-1/4  flex flex-col justify-center items-start gap-2 md:gap-6">
            <h1 className=" text-base md:text-4xl lg:text-5xl xl:text-7xl font-bold md:font-black uppercase font-opensans text-white">
              We Farm Chickens <br /> Ethically and Profitably
            </h1>
            <hr className="w-16 bg-[#00BBFF] border-[#00BBFF] h-1" />
            <p className="text-base md:text-3xl font-thin font-opensans text-white">
              We make it a priority to offer flexible <br /> services to
              accomodate your needs
            </p>
            <button className="bg-btncl text-md font-medium uppercase text-white py-2 px-3 md:py-4 md:px-6 w-52 hover:bg-slate-900">
              Get A Quote Now
            </button>
          </div>
        </div>
      </Carousel>
     <div>
        <div className="flex flex-col md:flex-row justify-around items-center accordianbg py-4">
          <div className="w-full md:w-2/4 p-4 order-2 md:order-1">
            <div>
              {activeIndex !== null && (
                <>
                  <div className="flex flex-col gap-5 py-20">
                    <h2 className="text-2xl md:text-5xl font-medium font-opensans">
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
          <div className="w-full md:w-[30%] h-full md:max-w-screen order-1 md:order-2"> 
            <div
              className={`cursor-pointer  ${
                activeIndex === 0
                  ? "bg-primarycl border-primarycl text-white text-sm font-medium small_accordian accordian_header "
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
                  ? "bg-primarycl border-primarycl text-white text-sm font-medium small_accordian accordian_header "
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
                  ? "bg-primarycl border-primarycl text-white text-sm font-medium small_accordian accordian_header "
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
