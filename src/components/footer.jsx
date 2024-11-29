import { useDarkMode } from './DarkModeContext';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { IoMdMail } from 'react-icons/io';
import prop7 from '../assets/images/prop7.jpg';
import prop8 from '../assets/images/prop8.jpg';


export function Footer() {

    const { darkMode, toggleDarkMode } = useDarkMode();

    return (

        <div className=' relative'>
            <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-10 gap-10`}>
            <div className='flex flex-col justify-center items-start gap-5'>
                <h1 className='text-white text-2xl font-semibold'>About Us</h1>
                <p className='text-slate-200 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero maxime optio dicta quisquam aspernatur cupiditate assumenda praesentium aut ullam!</p>
                <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
                    <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaFacebookF className='size-5'/>
                    </div>

                    <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaInstagram className='size-5'/>
                    </div>

                    <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaTwitter className='size-5'/>
                    </div>

                    <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaYoutube className='size-5'/>
                    </div>

                </div>

                <h1 className='text-white mt-8'> Copyright Suraj-Salve-358, All Rights Reserved</h1>
            </div>

            <div className='flex flex-col justify-center items-start gap-5'>

                <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
                <div className='flex justify-center items-center gap-3'>
                    <FaBuilding  className='text-white size-5'/>
                    <p className='text-slate-200'>Kohinoor Park, Tisgaon, Aurangabad-431136, Maharashtra.</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <FaMobile  className='text-white size-5'/>
                    <p className='text-slate-200'>+91 9960907232</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <IoMdMail className='text-white size-5'/>
                    <p className='text-slate-200'>suraj.salve3011@gmail.com</p>
                </div>
            </div>    
                
                <div className='flex flex-col justify-center items-start gap-5'>
                    <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>

                    <div className='flex justify-center items-center gap-4'>
                       <img src={prop7} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
                        <div>
                            <h1 className='text-lg text-white'>Villa with amazing View</h1>
                            <p className='text-slate-400'>Rs 10,00,000/-</p>
                        </div>

                    </div>

                    <div className='flex justify-center items-center gap-4'>
                       <img src={prop8} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
                        <div>
                            <h1 className='text-lg text-white'>Villa with amazing View</h1>
                            <p className='text-slate-400'>Rs 20,00,000/-</p>
                        </div>

                    </div>

                </div>
                
            </footer>

            <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
                <Link to='hero' spy={true} offset={-100} smooth={true}>
                 <FaArrowUp className='size-6 text-white'/>
                </Link>

            </div>

            <div className='aboslute'>
                <button onClick={toggleDarkMode} className='flex item-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-36'>
                    {
                        darkMode ? <FaMoon size={25} className='text-black' />  : 
                        <FaSun size={25} className='text-black'/> 
                    }

                </button>
            </div>
        
        </div>
    )
}