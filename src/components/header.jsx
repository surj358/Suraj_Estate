import { useDarkMode } from "./DarkModeContext";
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons';
import logo from '../assets/images/logo.jpg';
import { FaAd, FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";


export function Header() {

    const { darkMode, toggleDarkMode } = useDarkMode();
    

    // nav toggle demo

    const [ isVisible, setIsVisible ] = useState();

    const toggleVisibilty = () => {
        setIsVisible(!isVisible);
    };

    const navItems = [
        {
            link : 'Home', path: 'home'
        },
        {
            link : 'About', path: 'about'
        },
        {
            link : 'Properties', path: 'properties'
        },
        {
            link : 'Services', path: 'services'
        },
        
        {
            link : 'Testimonials', path: 'testimonials'
        },
        {
            link : 'Contact', path: 'contact'
        }
    ]

    return (
        

        <div className=" relative ">

            <nav className={`${ darkMode ? 'dark bg-black' : 'light bg-white'} flex justify-between
             items-center gap-4 lg:px-20 px-4 py-3 sticky z-30`}>

                <div id="logo" >
                    <a href=" https://surj358.github.io/Home/" > <img src={ logo } alt=" suraj Salve" className=" size-20  rounded-full" /> </a>

                </div>

                <ul className=" lg:flex justify-between items-center gap-8 hidden">
                    {navItems.map(({link, path}) => (
                        <Link key={path} className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white " to={path} spy={true} offset={-100} smooth={true} >
                        {link}
                        </Link>

                    ))}
                </ul>

                {/* toggle button demo     */}
                <button onClick={toggleVisibilty} className="lg:hidden sm:'' " >{
                        isVisible ? ( <img src="icon2.png" alt="" className="h-7 rounded-full"/> ) : 
                        ( <img src="icon1.png" alt="" className="h-7 rounded-full"/> )
                    }</button>


                <div className="flex justify-center items-center lg:gap-3 gap-2" >
                    <FaPhoneAlt className="size-5 text-red-600" />
                    <h1 className="lg:text-xl text-sm text-black  dark:text-white font-semibold " >9960907232</h1>

                    <a href=" https://surj358.github.io/Home/ ">
                    <FaUserCircle className="size-6 ml-4 text-red-600" />
                    </a>


                </div>
                
            </nav>

            {/* toogle button demo */}

            <div className={`transition-all duration-500 ease-in-out absolute z-50 w-full overflow-hidden ${isVisible ? 'max-h-96' : 'max-h-0'}`} >


                <div className="w-auto  h-fit bg-slate-800 p-4 aboslute  left-0 lg:hidden z-20 mx-5 mb-5 ">
                        <ul className="flex flex-col justify-center items-center text-center gap-2 w-full" >
                            {navItems.map(({link, path}) => (
                                    <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover-text-black w-full text-c" to={path} spy={true} offset={-100} smooth={true} >
                                    {link}
                                    </Link>

                            ))}
                        </ul>
                </div>

            </div>
        
        
        </div>
    )
}

