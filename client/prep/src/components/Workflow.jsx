import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeimg from "../assets/code.jpg"
import { checklistItems } from "../constants";
const Workflow = () => {
    return (
        <div >
            <h2 className="text-3xl tracking-wide sm:text-5xl lg:text-5xl text-center">Accelerate your
                <span className=" text-orange-800">{" "}work flow</span>
            </h2>
            <div className="flex flex-wrap justify-center ">
                <div className="w-full  lg:w-1/2">
                    <img className="mt-10" src={codeimg} alt="image" />
                </div>
                <div className="pt-10 mt-20  lg:w-1/2 sm:w-full ">
                    {checklistItems.map((item, key) => {
                       return <div key={key} className="mb-20 flex mx-1 sm:mx-9 lg:mx-12 ">
                            <div className="h-10 w-10 text-green-500 justify-center items-center rounded-full p-2">
                                <CheckCircle2/>
                                
                            </div>
                            <div className="ml-3 ">
                                <h4 className="">{item.title}</h4>
                                <p className="text-sm text-neutral-500 ">{item.description}</p>
                            </div>
                        </div>
                     })}
                </div>
            </div>
        </div>
    )
}
export default Workflow;