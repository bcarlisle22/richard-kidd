import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className="pb-4 pl-8">
        <h2 className="my-20 text-3xl">experience</h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-stone-400">
                        {experience.year}
                    </p>
                    </div> 
                    <div className="w-full lg:w-3/4">
                        <h3 className="mb-2 font-light">
                            {experience.role} - {""}
                            <span className="text-smß text-stone-500">{experience.company}</span>
                        </h3>
                        <p className="mb-4 text-stone-400">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span className="mr-2 mt-4 bg-stone-900 text-sm px-2 py-1" key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience