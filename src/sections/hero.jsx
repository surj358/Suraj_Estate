import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import heroimg from '../assets/images/hero1.webp';


export function Hero() {

    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-since',
            delay: 100,
        });


    }, [])

    return(

        <div className={`${ darkMode ? 'dark bg-black' : 'light bg-white'}`}>

            <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px28 sm:px-10 gap-7 z-20' style={{ backgroundImage: `url(${heroimg})`}} >

                <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] px-5 lg:leading-[70px] sm:leading-[60px]'>Find your next home in Las Vegas</h1>
                <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit voluptate, est aliquam consequuntur assumenda itaque enim rem vero aspernatur.</p>
            </section>

            <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>

                <div data-aos='zoom-in' id='form' className={`${ darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14 `} >
                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
                        <input type="text" placeholder='Enter an address, state, city or Pincode' className='bg-white p-2 w-full mt-2 border-b-[1px] border-gray-400 ' />

                    </div>
                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>CATEGORY</h1>

                        <select name="selectOptions" id="selectOptions" className='bg-white p-2 border-b-[1px] w-full mt-2 border-gray-400 text-gray-500 text-md '>

                            <option value="" disabled selected>Property category</option>
                            <option value="Option1">Appartment</option>
                            <option value="Option1">Flat</option>
                            <option value="Option1">Raw Houses</option>
                            <option value="Option1">Bangloes</option>
                            
                        </select>

                    </div>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>TYPE</h1>
                        <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full border-gray-400 text-gray-500 text-md font-semi-bold'>

                            <option value="" disabled selected>SelectProperty</option>
                            <option value="Option1">Rental</option>
                            <option value="Option2">Sales</option>
                            <option value="Option3">Comercial</option>
                        </select>
                        
                    </div>
                    <div className='w-full'>
                        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300' >SUBMIT</button>
                    </div>

                </div>

                

            </div>
        
        </div>
    )
} 