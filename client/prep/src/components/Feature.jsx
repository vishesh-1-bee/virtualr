import React from "react";
import { features } from "../constants";
const Feature = () => {
    return (
        <div className="relative  mt-20 border-neutral-700 min-h-[800px] ">
            <div className="text-center">
                <span className="uppercase rounded-full text-orange-500 h-6 font-semibold border bg-neutral-700 px-3 py-1">feature</span>
                <h1 className=" text-3xl sm:text-5xl lg:text-6xl mt-9 lg:mt-16 tracking-wide">Easy Build
                    <span className="bg-gradient-to-r from-orange-500 to bg-orange-900 bg-clip-text text-transparent">{" "}your code</span></h1>
            </div>
            <div className="flex lg:mt-16 mt-9 flex-wrap">
                {
                    features.map((item, key) => {
                   return     <div className="w-full  mb-2 rounded-2xl border-neutral-700  lg:w-1/3 sm:w-1/2 " key={key}>
                            <div className="flex mt-5 mb-3 ">
                                <div className=" mx-6 flex  text-orange-500 items-center justify-center h-10 w-10 bg-neutral-900  rounded-full">
                                    {item.icon}
                                </div>
                                <div className="mt-1 mb-5 text-xl">{item.text}
                                    <p className="text-neutral-600 w-10/12 text-sm mt-5">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Feature;