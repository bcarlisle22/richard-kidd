import React from 'react'
import richardKidd from "../assets/richardKidd.jpg"
import  {HERO_CONTENT}  from "../constants" 
import { LuDownload } from "react-icons/lu";


const Hero = () => {
  return (
    <section className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-10">
                    <img src={richardKidd} alt="Richard Kidd" className="border border-stone-900"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start mt-[30%]">
                    <h2 className="pb-2 text-4xl tracking-tighter lg:text-4xl"> [ Richard Kidd ]</h2>
                    <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-xl tracking-tight text-transparent font-extralight"> 
                        Software Engineer
                    </span>
                    <p className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tighter"> {HERO_CONTENT} </p>
                    <a href="#" rel="nonopener noreferrer" download className="bg-white rounded-full text-sm text-stone-800 mb-10 px-4 py-3 flex items-center"><LuDownload /> &#20; Download Resume </a>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero