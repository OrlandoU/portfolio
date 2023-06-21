import React from "react"
import { Fade } from "react-reveal"

function Banner(): JSX.Element {
    //Set colored class on event target element
    const handleColored: React.MouseEventHandler = (e: React.MouseEvent) => {
        let element: HTMLElement = e.target as HTMLElement
        element.classList.add('colored')
    }

    //Removes colored class from target element
    const handleUnColored: React.MouseEventHandler = (e: React.MouseEvent) => {
        let element: HTMLElement = e.target as HTMLElement
        element.classList.remove('colored')
    }

    return (
        <section className="min-h-screen z-10 relative flex flex-col py-12">
            <div className="flex-auto flex flex-col justify-center items-center px-6 text-center">
                <div className="text-4xl md:text-5xl lg:text-5xl drop-shadow-[0_0_1px_black] font-thin relative">
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Orlando </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Jose </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Umanzor </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Zelaya </span></Fade>
                </div>
                <div className="pt-1 drop-shadow-[0_0_1px_black]">
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Full </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Stack </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Developer</span></Fade>
                </div>
            </div>
            <Fade cascade left delay={400}>
                <div className="flex bg-indigo-700 text-white p-2 gap-4 justify-center text-2xl md:text-4xl lg:text-5xl relative flex-wrap px-6 opacity-50 mb-[48px] shadow-[0_0_10px_4px_rgba(0,0,0,0.5)]">
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-javascript-plain duration-100" ></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-css3-plain duration-100" ></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-html5-plain duration-100" ></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-react-original duration-100" ></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-webpack-plain duration-100"></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-firebase-plain duration-100" ></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-jest-plain duration-100"  ></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-npm-original-wordmark duration-100"></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-git-plain duration-100"  ></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-typescript-plain duration-100"></i>
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-nodejs-plain-wordmark duration-100"></i>
                    < i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-express-original duration-100" ></i>
                    < i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-mongodb-plain-wordmark duration-100" ></i >
                    <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-tailwindcss-original-wordmark duration-100"></i>
                    <span className="absolute inset-0 h-1 -top-1.5 z-10 bg-indigo-700"></span>
                </div>
            </Fade>
        </section>
    )
}

export default Banner