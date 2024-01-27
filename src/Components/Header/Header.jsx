import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logofarm.png";
import { HiMiniBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className="flex justify-between bg-white relative md:sticky md:top-0 z-30 shadow-2xl">
      <div className="flex gap-16 justify-between items-center px-4">
        <div className="py-3">
          <img src={logo} alt="Logo" className="max-w-28 h-20" />
        </div>
        <nav>
          <ul
            className={`hidden lg:flex flex-row justify-center items-center gap-8`}
          >
            <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6 h-20">
              <Link to="/">
                {" "}
                <p className="font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl">
                  Home
                </p>{" "}
              </Link>
            </li>
            <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6 h-20">
              <Link to="/about">
                {" "}
                <p className="font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl">
                  About Us
                </p>{" "}
              </Link>
            </li>
            <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6 h-20">
              <Link to="/service">
                {" "}
                <p className="font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl">
                  Services
                </p>{" "}
              </Link>
            </li>
            <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6 h-20">
              <Link to="/contactus">
                {" "}
                <p className="font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl">
                  Contact Us
                </p>{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex lg:hidden justify-center items-center gap-2 px-4">
        <p className="font-opensans text-lg uppercase font-medium leading-6 text-[#777777]">
          Menu
        </p>
        <HiMiniBars3 onClick={toggleMenu} className="text-lg font-bold" />
      </div>
      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-screen right-0 bg-white z-50 lg:hidden">
          <div className="flex justify-between items-center px-4">
            <div className="py-3">
              <img src={logo} alt="Logo" className="max-w-28 h-20" />
            </div>
            <div>
              <GrClose onClick={closeMenu} className="text-lg font-bold" />
            </div>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8 pt-20">
            <ul>
              <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8">
                <Link to="/" onClick={closeMenu}>
                  {" "}
                  <p className="font-opensans text-lg uppercase font-medium text-center leading-6 group-hover:text-primarycl">
                    Home
                  </p>{" "}
                </Link>
              </li>
              <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8">
                <Link to="/about" onClick={closeMenu}>
                  {" "}
                  <p className="font-opensans text-lg uppercase font-medium text-center leading-6 group-hover:text-primarycl">
                    About Us
                  </p>{" "}
                </Link>
              </li>
              <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8">
                <Link to="/service" onClick={closeMenu}>
                  {" "}
                  <p className="font-opensans text-lg uppercase font-medium  text-center leading-6 group-hover:text-primarycl">
                    Services
                  </p>{" "}
                </Link>
              </li>
              <li className="group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8">
                <Link to="/contactus" onClick={closeMenu}>
                  {" "}
                  <p className="font-opensans text-lg uppercase font-medium text-center leading-6 group-hover:text-primarycl">
                    Contact Us
                  </p>{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="hidden responsive-diagonal lg:flex lg:justify-end xl:justify-center items-center px-4">
        <h5 className="text-white text-base font-montserrat font-bold">+92 123 5466982</h5>
      </div>
    </header>
  );
};

export default Header;
