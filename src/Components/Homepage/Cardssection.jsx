import {
  faPagelines,
  faSquareFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faTree,
  faUsers,
  faTint,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cardssection = () => {
  const cardinputs = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faSquareFontAwesome} />,
      title: "Broilers",
      description:
        "We offer a full range of products to support healthy broiler performance.",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faTree} />,
      title: "Dynamic Ecology",
      description: `Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.'`,
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faUsers} />,
      title: "Breeders",
      description:
        "To ensure a good nutrition and production programs are tailored to support optimum performance.",
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faPagelines} />,
      title: "Save Tropic Forests",
      description:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faGlobe} />,
      title: "Layers",
      description:
        "We devise cost-effective nutritional solutions to guarantee optimal laying cycles and egg quality.",
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={faTint} />,
      title: "Organic Ecosystem",
      description:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
    },
  ];
  return (
    <section>
      {" "}
      <div className="py-32 px-24">
        <div className="grid grid-cols-3 gap-y-10">
          {cardinputs &&
            cardinputs.map((item) => (
              <div className="flex gap-6" key={item.id}>
                <div className="bg-[#2DBF00] rounded-[50%] py-2 px-12 text-white min-w-28 text-4xl flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-bold font-merriweather ">
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
      <div>
        <div className="questionbg bg-cover bg-no-repeat min-h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 py-20">
            <h2 className="text-5xl font-medium font-opensans text-white">
              {`You’ve got questions now.`}
            </h2>
            <hr className="w-20 bg-[#DB4436] border-[#DB4436] h-1" />
            <p className="text-lg font-normal font-opensans text-white">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Proin <br />facilisis, velit non fringilla
              pharetra, elit odio tincidunt mi, non
            </p>
            <button className="bg-primarycl text-white text-base font-semibold font-opensans w-36 rounded-md py-3 px-3">
              See More
              <FontAwesomeIcon icon={faArrowRightLong} className="mx-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardssection;
