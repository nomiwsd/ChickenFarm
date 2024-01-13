import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardinputs } from "../../utils/data";
import serviceimg1 from "../../assets/servicesimg1.jpg";
import serviceimg2 from "../../assets/servicesimg2.jpg";
import badgepc from "../../assets/badge_pc.png";
import BBBlogo from "../../assets/BBB_logo.png";
import {
  faCheckToSlot,
  faHeadphones,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
const Servicespage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section>
        <div className=" slide_1 relative h-[60vh]">
          <div className="absolute left-[5%] top-2/4">
            <h1 className="text-4xl font-merriweather font-bold text-white">
              Services
            </h1>
            <p className="uppercase text-white text-sm font-opensans">
              Home / <span className="text-sm font-bold">Services</span>
            </p>
          </div>
        </div>
        <div className="px-4 py-12 md:py-32 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-10 md:gap-x-4">
            {cardinputs &&
              cardinputs.map((item) => (
                <div className="flex gap-2 md:gap-3" key={item.id}>
                  <div className="bg-[#2DBF00] w-20 h-20 rounded-full px-8 py-3 flex items-center justify-center">
                    <span className="text-2xl text-white">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="text-xl font-bold font-merriweather ">
                      {item.title}
                    </h1>
                    <p className="text-sm font-opensans font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-12">
          <div>
            <img src={serviceimg1} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col justify-center items-start gap-4 px-6 py-6">
            <h1 className="font-merriweather text-4xl font-normal">
              Our call, anytime, anywhere!
            </h1>
            <h3 className="text-2xl font-merriweather font-normal">
              Lorem ipsum dolor, sit amet
            </h3>
            <hr className="w-20 bg-[#DB4436] border-[#DB4436] h-1" />
            <p className="text-sm font-opensans font-normal">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex">
              <img src={badgepc} alt="" />
              <img src={BBBlogo} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-12">
          <div className="flex flex-col justify-center items-start gap-4 px-6 py-4 order-2 md:order-1">
            <h1 className="font-merriweather text-4xl font-normal">
              Our call, anytime, anywhere!
            </h1>
            <h3 className="text-2xl font-merriweather font-normal">
              Lorem ipsum dolor, sit amet
            </h3>
            <hr className="w-20 bg-[#DB4436] border-[#DB4436] h-1" />
            <p className="text-sm font-opensans font-normal">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex">
              <img src={badgepc} alt="" />
              <img src={BBBlogo} alt="" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={serviceimg2} alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="bg-primarycl text-white px-6 md:px-20 py-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 ">
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faCheckToSlot} className="text-6xl" />
              <p className="text-4xl font-bold">
                {counterOn && (
                  <CountUp start={0} end={362} duration={2} delay={0} />
                )}
              </p>

              <h1 className="text-4xl md:text-2xl lg:text-4xl font-opensans font-bold">
                Projects Done
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faUsers} className="text-6xl" />

              <p className="text-4xl font-bold">
                {counterOn && (
                  <CountUp start={0} end={1530} duration={2} delay={0} />
                )}
              </p>

              <h1 className="text-4xl md:text-2xl lg:text-4xl font-opensans font-bold">
                Happy Clients
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faHeadphones} className="text-6xl" />
              <p className="text-4xl font-bold">
                {counterOn && (
                  <CountUp start={0} end={3201} duration={2} delay={0} />
                )}
              </p>
              <h1 className="text-4xl md:text-2xl lg:text-4xl font-opensans font-bold">
                Awesome Calls
              </h1>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Servicespage;
