import { ReactElement } from "react"
import React from "react";
import { ProjectI } from "./Projects";
import { Fade } from 'react-reveal'

interface ProjectProps extends ProjectI {
    side: boolean,
    index: number
}

interface TechIcon {
    [key: string]: JSX.Element;
}

function Project(props: ProjectProps): ReactElement {

    const { title, description, image, technologies, liveDemo, sourceCode }: ProjectI = props
    const equivalents: TechIcon = {
        React: < i className="devicon-react-original colored" ></i>,
        Css: <i className="devicon-css3-plain colored"></i>,
        Js: <i className="devicon-javascript-plain colored"></i>,
        HTML: <i className="devicon-html5-plain colored"></i>,
        Webpack: <i className="devicon-webpack-plain colored"></i>,
        Git: <i className="devicon-git-plain colored"></i>,
        Npm: <i className="devicon-npm-original-wordmark colored"></i>,
        Firebase: <i className="devicon-firebase-plain colored"></i>,
        Typescript: <i className="devicon-typescript-plain colored"></i>,
        Node: <i className="devicon-nodejs-plain-wordmark colored"></i>,
        Express: <i className="devicon-express-original"></i>,
        Mongo: < i className="devicon-mongodb-plain-wordmark colored" ></i >,
    }
    return (
        <li className="relative flex-col md:odd:flex-row-reverse md:flex-row md:mx-6 max-w-[1175px] flex-wrap gap-2 md:gap-16 flex text-white items-center p-6 md:p-16 z-10 backdrop-blur-md  rounded-md">
            <Fade>
                <div className="md:hidden">
                    <h2 className="text-4xl md:text-4xl font-thin">{title}</h2>
                    <div className="flex flex-wrap justify-center md:text-4xl text-3xl gap-4 md:gap-2 p-4 md:px-4 py-2 backdrop-blur-md my-2 w-fit shadow-[0_0_6px_rgba(0,0,0,0.15)] rounded-md">
                        {technologies.map(tech => (
                            equivalents[tech]
                        ))}
                    </div>
                </div>
            </Fade>
            <Fade cascade right={props.side} left={!props.side}>
                <div className="flex-[3] grid grid-cols-2 gap-4 items-stretch">
                    {image.map(img =>
                        <img src={img} alt="Project Preview" className="object-cover flex-1 first:col-span-2 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded" />
                    )}
                </div>
            </Fade>
            <Fade bottom distance="60px" duration={800}>
                <div className="flex-[4] flex flex-col items-center md:items-start">
                    <h2 className="text-4xl hidden md:block md:text-4xl font-thin">{title}</h2>
                    <div className="hidden md:block">
                        <div className="flex  flex-wrap justify-center md:text-4xl text-3xl gap-4 md:gap-2 p-4 md:px-4 py-2 backdrop-blur-md my-2 w-fit shadow-[0_0_6px_rgba(0,0,0,0.15)] rounded-md">
                            {technologies.map(tech => (
                                equivalents[tech]
                            ))}
                        </div>
                    </div>
                    <div className="text-[15px] flex flex-col gap-2 font-normal antialiased md:my-5 my-2">{description}</div>
                    <div className="flex gap-2 mt-3">
                        <a href={liveDemo} rel='noreferrer' target="_blank" className="duration-200 px-6 py-1.5 bg-indigo-700 text-white font-semibold rounded hover:bg-white hover:text-indigo-700 hover:shadow-[0_0_8px_1px_#4338ca] hover:-translate-y-[2px]"> <span>Live Demo</span></a>
                        <a href={sourceCode} rel='noreferrer' target="_blank" className="duration-200 text-black bg-white flex items-center gap-2 px-6 py-1.5 shadow-[0_0_6px_rgba(0,0,0,0.15)] backdrop-blur-md font-semibold rounded hover:bg-black hover:text-white hover:-translate-y-[2px]"><i className="devicon-github-original"></i><span>Source Code</span></a>
                    </div>
                </div>
            </Fade>
            <span className="absolute w-1/4 h-0.5 bg-indigo-700 -bottom-[63px] left-1/2 -translate-x-1/2"></span>
        </li>
    )

}

export default Project