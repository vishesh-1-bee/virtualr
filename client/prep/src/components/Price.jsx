import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";
const Price = () => {
    return (
        <div className="mt-3  ">
            <h1 className="flex text-3xl sm:text-4xl lg:text-6xl text-center my-8 items-center justify-center">Pricing</h1>
            <div className="flex  flex-wrap justify-center">
                {pricingOptions.map((price, key) => {
                    return <div key={key} className=" border border-neutral-600 w-full  rounded-xl mt-10 lg:mx-6 lg:mt-16  lg:w-1/4 sm:w-1/2 ">
                        <div className="broder border-neutral-900 p-8  ">
                            <p className=" text-3xl lg:text-4xl mb-8">{price.title}
                                {price.title === "Pro"&& (
                                    <span className=" text-sm ml-2 text-orange-500">(Most popular)</span>
                                )}
                            </p>
                            <p className="flex">
                                <span className="text-4xl mr-2 ">{price.price}</span>
                                <span className="mt-3 text-neutral-500 tracking-tight">/Months</span>
                                </p>
                                <ul className="mt-10">
                                    {price.features.map((feature, key)=>{
                                       return <li className="ml-2 flex space-x-4 mb-3" key={key}>
                                            <CheckCircle2/>
                                            <span>{feature}</span>
                                        </li>
                                    })}
                                </ul>
                                <a href="#" className="mt-16 border tracking-tight duration-200 rounded-md border-orange-900 flex items-center justify-center p-4 text-xl hover:bg-orange-500">Subscribe</a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Price;