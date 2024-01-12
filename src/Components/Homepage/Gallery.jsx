import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainimg from "../../assets/eggs.jpg";
import smallimg1 from "../../assets/smallimg1.jpg";
import smallimg2 from "../../assets/smallimg2.jpg";
import smallimg3 from "../../assets/smallimg3.jpg";
import smallimg4 from "../../assets/smallimg4.jpg";
import smallimg5 from "../../assets/smallimg5.jpg";
import smallimg6 from "../../assets/smallimg6.jpg";
import videoimg from "../../assets/videoimg.jpg";
import eggimg from "../../assets/eggss.jpg";
import cardimg2 from "../../assets/videoimg2.jpg";
import { faArrowRightLong, faPlay } from "@fortawesome/free-solid-svg-icons";
const Gallery = () => {
  return (
    <section>
      <div className="px-24 py-32">
        <div className=" flex flex-col justify-center items-center gap-5 mb-24">
          <hr className="w-20 bg-primarycl border-primarycl h-1" />
          <h1 className="text-5xl font-opensans font-semibold leading-9">
            Our Photos
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden">
              <img src={mainimg} alt="" className="w-full h-full cardimg hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 transition duration-300 ease-in-out  ">
                <h4 className="text-white font-merriweather font-bold gallery_para">{`Words which don't look even slightly`}</h4>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <div className="relative overflow-hidden">
                <img src={smallimg1} alt="" className="w-full max-h-full cardimg hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 transition duration-300 ease-in-out ">
                  <h4 className="text-white font-merriweather font-bold gallery_para">{`Vestibulum risus nulla`}</h4>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img src={smallimg2} alt="" className="w-full max-h-full cardimg hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 transition duration-300 ease-in-out ">
                  <h4 className="text-white font-merriweather font-bold gallery_para">{`Praesent tincidunt vulputate`}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative overflow-hidden">
              <img src={smallimg3} alt="" className="w-full max-h-full cardimg hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 transition duration-300 ease-in-out ">
                <h4 className="text-white font-merriweather font-bold gallery_para">{`Aenean rutrum dolor nibh`}</h4>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img src={smallimg4} alt="" className="w-full max-h-full cardimg hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 transition duration-300 ease-in-out ">
                <h4 className="text-white font-merriweather font-bold gallery_para">{`Maecenas massa eu blandit`}</h4>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img src={smallimg5} alt="" className="w-full max-h-full cardimg hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 transition duration-300 ease-in-out ">
                <h4 className="text-white font-merriweather font-bold gallery_para">{`Niteger venenatis nisi`}</h4>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img src={smallimg6} alt="" className="w-full max-h-full  cardimg hover:scale-110 " />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent py-4 px-2 transition duration-300 ease-in-out ">
                <h4 className="text-white font-merriweather font-bold gallery_para">{`Lorem ipsum dolor`}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-screen questions_bg bg-cover bg-no-repeat px-24 py-32 grid grid-cols-2 gap-5">
        <div className="flex justify-center items-center relative">
          <img src={videoimg} alt="" />
          <div className="border-white border-4 rounded-full p-3 min-w-16 flex justify-center items-center absolute">
            <FontAwesomeIcon
              icon={faPlay}
              className="text-primarycl text-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-opensans font-semibold leading-9 text-white">
            {`You've got questions, we've got answers.`}
          </h1>
          <hr className="w-20 bg-[#DB4436] border-[#DB4436] h-1" />
          <p className="font-opensans font-normal text-sm text-white">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
      </div>

      <div className="px-24 py-32">
        <div className=" flex flex-col justify-center items-center gap-5 mb-24">
          <hr className="w-20 bg-primarycl border-primarycl h-1" />
          <h1 className="text-5xl font-opensans font-semibold leading-9">
            Our Recent News
          </h1>
          <h4 className=" font-merriweather font-medium">From Our Blog</h4>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className=" flex flex-col justify-start shadow-2xl">
            <img src={eggimg} alt="" className="w-full h-full" />
            <div className="px-4 py-4 flex flex-col gap-4">
              <p>
                <span>Nov, 17, 2016</span> -<span>root</span> -
                <span className="text-primarycl">Uncategorized</span>
              </p>

              <p className="text-lg font-bold leading-7 text-[#333] font-merriweather">
                Words which don’t look even slightly
              </p>
              <p className="text-[#777] font-opensans font-normal text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words…
              </p>
              <button className="bg-primarycl text-white text-base font-semibold font-opensans w-36 rounded-md py-3 px-3">
                Read More
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>
          </div>
          
          <div className=" flex flex-col justify-start shadow-2xl">
            <img src={cardimg2} alt="" className="w-full h-full" />
            <div className="px-4 py-4 flex flex-col gap-4">
              <p>
                <span>Nov, 17, 2016</span> -<span>root</span> -
                <span className="text-primarycl">Uncategorized</span>
              </p>

              <p className="text-lg font-bold leading-7 text-[#333] font-merriweather">
                Words which don’t look even slightly
              </p>
              <p className="text-[#777] font-opensans font-normal text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words…
              </p>
              <button className="bg-primarycl text-white text-base font-semibold font-opensans w-36 rounded-md py-3 px-3">
                Read More
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
