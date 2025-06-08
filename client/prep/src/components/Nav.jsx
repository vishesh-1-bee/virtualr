import React, { useState } from "react";
import logo from "../assets/logo.png"
import { navItems } from "../constants";
import { Menu,X } from "lucide-react";
const Nav = () => {
    const [mobile, setmobile]=useState(false);

    const toglenav= ()=>{
        setmobile(!mobile)
    }
    return (
        <nav className="sticky py-4 top-0 z-50 backdrop-blur-lg border border-neutral-700/80">
            <div className=" h-8 container text-sm relative mx-auto px-5">
                <div className=" flex items-center justify-between" >
                    <div className=" flex items-center shrink-0">
                        <img className="h-10 w-10 " src={logo} alt="company logo" />
                        <span className="tracking-tight text-xl font-semibold">VirtualR</span>
                    </div>
                    <ul className=" hidden lg:flex space-x-9 decoration-0 ">
                        {
                            navItems.map((i, k) => {
                                return <li className="hover:text-orange-300 hover:duration-300 gap-3.5" key={k}>
                                    <a href={i.href}>{i.label}</a>
                                </li>
                            })
                        }
                    </ul>
                    <div className="hidden lg:flex space-x-12 ml-5 justify-center items-center ">
                        <a className="px-4 py-2 rounded-md border bg-gradient-to-r from-orange-500 to bg-orange-800 hover:bg-transparent " href="#">Login</a>
                        <a className="px-4 py-2 rounded-md border bg-gradient-to-r from-orange-500 to bg-orange-800 hover:bg-transparent" href="#">Create a Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                       <button onClick={toglenav}>{mobile ? <X/>: <Menu/>}</button>
                    </div>
                </div>
                {mobile && (
                    <div className="space-y-3 justify-center items-center flex flex-col fixed right-0 z-20 w-full p-8 lg:hidden bg-neutral-900">
                      <ul className=" space-y-2 hover:bg-orange-400 ">
                        {
                            navItems.map((i, k) => {
                                return <li className=" gap-3.5" key={k}>
                                    <a href={i.href}>{i.label}</a>
                                </li>
                            })
                        }
                    </ul>
                    <div className="space-x-7 mt-2 ">
                        <a className="px-4 py-2 rounded-md border bg-gradient-to-r from-orange-500 to bg-orange-800 " href="#">Login</a>
                        <a className="px-4 py-2 rounded-md border bg-gradient-to-r from-orange-500 to bg-orange-800" href="#">Create a Account</a>
                    </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Nav