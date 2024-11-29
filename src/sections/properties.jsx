import { useDarkMode } from "../components/DarkModeContext"
import { property } from "../components/export"
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, Facamera, FaCamera, FaHeart } from "react-icons/fa";
import { MdSpaceDashboard } from 'react-icons/md';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export function Properties() {
    
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

        <div className={`${darkMode ? 'dark bg-black text-white' : 'light bg-transparent'}`}>

            <section id="properties" className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10 ">

                <div className="flex flex-col justify-center items-start gap-4">
                    <h1 data-aos="zoom-in" className="text-red-500 dark:text-white font-semibold">PROPERTIES</h1>
                    <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold dark:text-white">Explore the Latest</h1>

                </div>

                {/* properties grid startes here */}

                <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
                    {
                        property.map((item, index) => (
                            <div data-aos="zoom-in" data-aos-delay='200' ket={index} className="bg-white dark:bg-gray-800 rounded-xl w-full">

                                <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end " style={{backgroundImage: `url(${item.images})`}}>
                                    <div id="top" className="flex justify-between items-end w-full">
                                        <div>
                                            <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] ">Feature</button>
                                        </div>

                                        <div className="flex justify-between items-center gap-3"><button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] font-semibold">Sales</button><button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] font-semibold ">Active</button>

                                        </div>

                                    </div>

                                    <div id="bottm" className="flex justify-between items-end w-full">
                                        <div className="flex justify-start items-center gap-2">
                                            <FaMapMarkerAlt className="size-4 text-white" />
                                            <h1 className="text-white ">{item.address}</h1>

                                        </div>

                                        <div className="flex justify-center items-center gap-4">
                                            <FaVideo className="size-4 text-white" />
                                            <FaCamera className="size-4 text-white" />

                                        </div>

                                    </div>

                                </div>

                                <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                                    <h1 className="text-xl text-black font-semibold dark:text-white">{item.name}</h1>
                                    <h1 className="text-2xl text-red-600 font-semibold dark:text-white">{item.price}</h1>
                                    <p className="dark:text-white">{item.about}</p>

                                    <div className="flex gap-4">
                                        <div id="icons" className="flex justify-center items-start gap-2">
                                            <FaBath className="size-5 text-red-500" />
                                            <h1 className="dark:text-white">{item.bath}</h1>
                                        </div>
                                        <div id="icons" className="flex justify-center items-center gap-2">
                                            <FaBed className="size-5 text-red-500" />
                                            <h1 className="dark:text-white">{item.bed}</h1>
                                        </div>
                                        <div id="icons" className="flex justify-center items-center gap-2">
                                            <MdSpaceDashboard className="size-5 text-red-500" />
                                            <h1 className="dark:text-white">{item.area}</h1>
                                        </div>
                                        
                                    </div>

                                    <div className="w-full h-[1px] bg-gray-200 mt-8 "></div>

                                    <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                                        <div className="flex justify-center items-center gap-2"><FaUserCircle className="size-5 text-red-800" />
                                        <h1 className="dark:text-white">{item.owner}</h1></div>

                                        <div className="flex justify-center items-center gap-4">
                                            <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform">
                                                <FaShareAlt className="size-4 text-red-800"/>
                                            </div>
                                            <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform">
                                                <FaHeart className="size-4 text-red-800"/>
                                            </div>
                                            <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform">
                                                <FaPlus className="size-4 text-red-800"/>
                                            </div>

                                        </div>

                                    </div>
                                    


                                </div>
                                

                            </div>
                        ))
                    }

                </div>




            </section>
        
        </div>
    )
}