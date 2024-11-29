import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function Contact() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay:100
        });

    }, [])

    const { darkMode, toggleDarkMode } = useDarkMode();

    return(

        <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
        <section id="contact" className={`${darkMode ? 'dark bg-gray-800': 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}>
            <div data-aos="zoom-in" className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl">
                <h1 className="text-2xl text-black font-semibold dark:text-white">Send a message Today</h1>
                <input type="text" placeholder="Enter your Full Name Here" required className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
                <input type="email" placeholder="Enter your Valid Email" required className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
                <input type="number" placeholder="Mobile No." required className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
                <textarea name="" id="" cols="30" rows="5" placeholder="Enter your messdage here....." className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"></textarea>

                <button className="bg-red-700 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">SEND Email</button>
            </div>

            <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
                <h1 data-aos="zoom-in" data-aos-delay="100" className='text-red-500 dark:text-white font-bold'>REACH US</h1>
                <h1 data-aos="zoom-in" data-aos-delay="300" className="text-black text-[40px] font-semibold leading-10 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corporis?</h1>
                <p data-aos="zoom-in" data-aos-delay="500" className="text-xl text-gray-600 text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et culpa nobis a doloremque quia sint ea facilis, non, saepe pariatur magnam possimus aspernatur quasi quisquam voluptate? Dolorum, magnam eos.</p>

                <button className="bg-red-700 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">SEND Email</button>
           
            </div>

        </section>
        
        </div>
    )
}