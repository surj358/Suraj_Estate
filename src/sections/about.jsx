import { useEffect } from 'react';
import abouting from '../assets/images/about.jpg';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos'
import 'aos/dist/aos.css';

export function About() {

    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 700,
            easing: 'ease-in-sine',
            delay:100
        });

    }, [])


    return(

        <div>
            <section id='about' className={`${darkMode ? 'dark bg-black text-white' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`} >
                <div>
                    <img data-aos='zoom-in' src={abouting} alt="about image" className='rounded-2xl lg:w-[500px] lf:h-[600px] ' />
                </div>

                <div className='flex flex-col justify-center items-start gap-8' >
                    <h1 data-aos='zoom-in' className='text-red-500 dark:text-white font-semibold' >WHO WE ARE</h1>

                    <h1 data-aos='zoom-in' data-aos-delay='200' className='text-black text-[40px] font-semibold leading-10 dark:text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, consequatur.</h1>

                    <p data-aos='zoom-in' data-aos-delay='400' className=' text-gray-600 dark:text-white text-justify text-xl' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est optio laboriosam eveniet architecto quas, fugiat iusto totam, praesentium, in voluptate nemo! Praesentium quis aliquid soluta consequuntur eaque odio sunt!</p>

                    <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300' >READ MORE</button>

                </div>

            </section>
        
        
        </div>
    )
}