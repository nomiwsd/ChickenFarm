import { aboutuscard } from "../../utils/data";
import aboutimg from "../../assets/aboutimg.jpg";
import addtree from "../../assets/addtree.png";
import aboutimg2 from "../../assets/aboutimg2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const AboutUspage = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Set the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className=" slide_1 relative h-[60vh]">
        <div className="absolute left-[5%] top-2/4">
          <h1 className="text-4xl font-merriweather font-bold text-white">
            About Us
          </h1>
          <p className="uppercase text-white text-sm font-opensans">
            Home / <span className="text-sm font-bold">About Us</span>
          </p>
        </div>
      </div>
      <div className="px-4 py-12 md:px-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="">
            <img src={addtree} alt="" className="w-full object-fit h-96" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-merriweather text-2xl font-normal">This was founded in 2016 and formally registered in 2017 with aim to develop healthy working relationship between farmers and other industry stakeholders.
            </p>
            <p className="font-merriweather text-2xl font-normal ">It has well defined hierarchies with efficient systems of compliance,  internal controls and functional departments as in given structure</p>
          </div>
        </div>

      </div>
      <div className="px-4 py-12 md:px-16 md:py-32">
        <div className=" flex flex-col justify-center items-center gap-12 mb-24">
          <h1 className="text-5xl font-opensans font-semibold leading-9">
            Our Story
          </h1>
          <p className="text-lg font-opensans font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
            reminusto doeiusmod <br /> tempor incidition ulla mco laboris nisi
            ut aliquip ex ea commo condorico consectetur <br /> adipiscing
            elitut aliquip.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutuscard &&
            aboutuscard.map((item) => (
              <div className="flex flex-col gap-4" key={item.id}>
                <img src={item.cardimage} alt="" className="w-full h-full" />
                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold font-merriweather text-center text-[#333]">
                    {item.cardtitle}
                  </h1>
                  <p className="text-base text-[#999] text-center font-opensans font-normal">
                    {item.carddesc}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="px-4 py-12 md:px-16 md:py-32 bg-[#ebebeb]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center">
          <div className="flex flex-col justify-start items-start gap-6">
            <h1 className="font-merriweather text-[44px] font-normal leading-[94px]">
              Making it all make sense.{" "}
            </h1>
            <p className="text-sm font-normal font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
              reminusto doeiusmod tempor incidition ulla mco laboris nisi ut
              aliquip ex ea commo condorico consectetur adipiscing elitut
              aliquip.{" "}
            </p>
            <button className="bg-primarycl text-white text-base font-semibold font-opensans w-36 rounded-md py-3 px-3">
              Read More
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          </div>
          <div className="flex justify-center">
            <img src={aboutimg} alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 py-12 md:px-16 md:py-32">
        <div className=" flex flex-col justify-center items-center gap-12 mb-24">
          <h1 className="text-5xl font-opensans font-semibold leading-9">
            Your Vision, Our Future.
          </h1>
          <p className="text-lg font-opensans font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
            reminusto doeiusmod <br /> tempor incidition ulla mco laboris nisi
            ut aliquip ex ea commo condorico consectetur <br /> adipiscing
            elitut aliquip.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-16 lg:px-28">
          <div className="">
            <img src={aboutimg2} alt="" />
          </div>
          <div>
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div
                  className={`cursor-pointer py-4 px-6 transition-all ease-in ${activeTab === "tab1"
                      ? "bg-primarycl text-white scale-110 shadow-2xl"
                      : "bg-gray-200"
                    }`}
                  onClick={() => handleTabClick("tab1")}
                >
                  Be Bold
                </div>
                <div
                  className={`cursor-pointer py-4 px-6 transition-all ease-in ${activeTab === "tab2"
                      ? "bg-primarycl text-white scale-110 shadow-2xl"
                      : "bg-gray-200"
                    }`}
                  onClick={() => handleTabClick("tab2")}
                >
                  Be Direct
                </div>
                <div
                  className={`cursor-pointer py-4 px-6 transition-all ease-in ${activeTab === "tab3"
                      ? "bg-primarycl text-white  scale-110 shadow-2xl"
                      : "bg-gray-200"
                    }`}
                  onClick={() => handleTabClick("tab3")}
                >
                  Choose Freedom
                </div>
              </div>

              <div className="mt-4">
                {activeTab === "tab1" && (
                  <div>
                    Bresaola beef pork loin doner tenderloin flank sausage
                    turkey rump. Pastrami pork loin sausage bacon tenderloin
                    tongue kevin hamburger short loin landjaeger beef. Bresaola
                    burgdoggen ribeye. Chuck jerky pastrami capicola brisket
                    pork landjaeger corned beef pork loin beef ham. Meatloaf
                    pork belly hamburger meatball ground round, fatback ham hock
                    chicken.
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div>
                    I am text block. Click edit button to change this text.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div>
                    I am text block. Click edit button to change this text.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </div>
                )}
                {/* Add more conditions for additional tabs */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUspage;
