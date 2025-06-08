import React from "react";
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const Hero = () => {
    return (
        <div className=" flex flex-col items-center mt-6 lg:mt-9">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">VirtualR built tools
                <span className="bg-gradient-to-r from-orange-400 to bg-orange-900 bg-clip-text text-transparent"> for developer</span>
            </h1>
            <p className="mt-6 max-w-3xl text-neutral-500 items-center  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit suscipit voluptas maxime sapiente quod mollitia 
                recusandae, fugit quibusdam corrupti? Nulla, culpa.</p>
                <div className="flex space-x-8 justify-center mt-6">
                    <a href="#" className="py-2 px-2 items-center justify-center flex border rounded-md bg-gradient-to-r from-orange-400 to bg-orange-900">Start for free</a>
                    <a href="#" className=" py-2  px-2 items-center justify-center flex border rounded-md">Documentation</a>
                </div>
                <div className="flex justify-center space-x-5">
                    <video className="border-orange-400 border rounded-lg w-1/3 mt-5   " autoPlay muted loop src={video1}></video>
                    <video className="border-orange-400 border rounded-lg w-1/3 mt-5  " autoPlay muted loop src={video2}></video>
                </div>
        </div>
    )
}
export default Hero;