import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardinputs } from "../../utils/data";

const Cardssection = () => {

  return (
    <section>
      {" "}
      <div className="px-4  py-12 md:py-32 md:px-16">
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
      <div>
        <div className="questionbg bg-cover bg-no-repeat min-h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 py-20 px-4">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-medium font-opensans text-white">
              {`You’ve got questions now.`}
            </h2>
            <hr className="w-20 bg-[#DB4436] border-[#DB4436] h-1" />
            <p className="text-sm md:text-lg  font-normal font-opensans text-white">
              Using social, electronic and print media to achieve the consumer feedback and also best connection with customers.
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
