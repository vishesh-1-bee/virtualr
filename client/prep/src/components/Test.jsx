import { testimonials } from "../constants";
const Test = () => {
    return (
        <div className="mt-18 tracking-wide">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center">What people are saying</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((tests, key) => {
                 return   <div className=" w-full  sm:w-1/2 lg:w-1/3 mt-10 px-3 py-2">
                        <div className="border border-neutral-800 rounded-md text-neutral-600 p-12  ">{tests.text.slice(0,100)}
                            <div className="flex mt-12 ">
                                <img src={tests.image} className="h-10 w-10 rounded-full flex justify-center items-center" alt="" />
                                <div className=" flex flex-col ml-4">
                                    <span className="text-neutral-300">{tests.user}</span><span>{tests.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Test;