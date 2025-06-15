import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className="pb-4 pl-8">
        <h2 className="my-20 text-3xl">projects</h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap items-center">
                    <div className="w-full lg:w-3/4">
                        <h3 className="mb-2 font-light text-xl underline hover:text-stone-500 hover:cursor">{project.title}</h3>
                        <p className="mb-4 text-stone-400 text-sm">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span className="mr-2 bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects