import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logofarm.png'
import { HiMiniBars3 } from "react-icons/hi2";
const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
      };
  return (
    <header className="flex justify-between bg-white sticky top-0 z-30 shadow-2xl">
      <div className='flex gap-16 justify-between items-center px-4'>
      <div>
        <img src={logo} alt="Logo" className='max-w-28'/>
      </div>
        <nav>
            <ul className={`hidden lg:flex flex-row justify-center items-center gap-8`}>
                <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6'>
                <Link > <p className='font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl'>Home</p> </Link>
                </li>
                <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6'>
                <Link > <p className='font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl'>About Us</p> </Link>
                </li>
                <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6'>
                <Link > <p className='font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl'>Services</p> </Link>
                </li>
                <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-6'>
                <Link > <p className='font-opensans text-lg uppercase font-medium leading-6 group-hover:text-primarycl'>Contact Us</p> </Link>
                </li>
             </ul>
        </nav></div> 
        <div className='flex lg:hidden justify-center items-center gap-2 px-4'>
            <p className='font-opensans text-lg uppercase font-medium leading-6 text-[#777777]'>Menu</p>
            <HiMiniBars3 onClick={toggleMenu} className='text-lg font-bold'/>
        
        </div>
           {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed top-16 left-0 right-0 bg-white z-50 lg:hidden'>
          <nav className='flex flex-col justify-center items-center gap-8 pt-20'>
            <ul>
              <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8'>
                <Link to='/' onClick={closeMenu}> <p className='font-opensans text-lg uppercase font-medium text-center leading-6 group-hover:text-primarycl'>Home</p> </Link>
              </li>
              <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8'>
                <Link to='/about' onClick={closeMenu}> <p className='font-opensans text-lg uppercase font-medium text-center leading-6 group-hover:text-primarycl'>About Us</p> </Link>
              </li>
              <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8'>
                <Link to='/services' onClick={closeMenu}> <p className='font-opensans text-lg uppercase font-medium  text-center leading-6 group-hover:text-primarycl'>Services</p> </Link>
              </li>
              <li className='group hover:border-b-[3px] hover:border-b-primarycl pt-6 pb-8'>
                <Link to='/contact' onClick={closeMenu}> <p className='font-opensans text-lg uppercase font-medium text-center leading-6 group-hover:text-primarycl'>Contact Us</p> </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
        <div className='bg-primarycl border-l-[px48] border-l-white  border-t-[#83ca13] w-72 justify-center items-center relative h-20 hidden lg:flex'>
            <p className='text-lg font-bold font-opensans text-white'>+12324243434</p>
        </div>
    </header>
  )
}

export default Header