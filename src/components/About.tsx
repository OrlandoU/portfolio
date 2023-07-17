import React from "react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import TechList from "./TechList"
import cs50 from '../assets/cs50.webp'
import { Fade } from "react-reveal"


function About(): JSX.Element {
    const [, setViewed] = useState<boolean>()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })


    useEffect(() => {
        if (inView) {
            setViewed(true)
        }
    }, [inView])

    return (
        <section id="about" ref={ref} className="z-10 bg-white py-20 flex flex-col lg:flex-row lg:gap-12 shadow-[0_0_50px_1px_rgba(0,0,0,1)] relative">
            <svg
                className="topography-shape js-shape absolute top-0 right-0 h-[200px] md:h-[500px] xl:h-[700px]"
                viewBox="0 0 1200 680"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-1800, 60) scale(2.8, 2.8) skewX(30)"
                    style={{ position: 'relative', zIndex: 0, fill: 'rgb(214, 242, 255)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-1650, 55) scale(2.65, 2.65) skewX(27.5)"
                    style={{ position: 'relative', zIndex: 1, fill: 'rgb(199, 225, 243)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-1500, 50) scale(2.5, 2.5) skewX(25)"
                    style={{ position: 'relative', zIndex: 2, fill: 'rgb(184, 207, 230)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-1350, 45) scale(2.3499999999999996, 2.3499999999999996) skewX(22.5)"
                    style={{ position: 'relative', zIndex: 3, fill: 'rgb(169, 190, 218)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-1200, 40) scale(2.2, 2.2) skewX(20)"
                    style={{ position: 'relative', zIndex: 4, fill: 'rgb(154, 173, 206)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-1050, 35) scale(2.05, 2.05) skewX(17.5)"
                    style={{ position: 'relative', zIndex: 5, fill: 'rgb(139, 155, 193)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-900, 30) scale(1.9, 1.9) skewX(15)"
                    style={{ position: 'relative', zIndex: 6, fill: 'rgb(125, 138, 181)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-750, 25) scale(1.75, 1.75) skewX(12.5)"
                    style={{ position: 'relative', zIndex: 7, fill: 'rgb(110, 121, 169)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-600, 20) scale(1.6, 1.6) skewX(10)"
                    style={{ position: 'relative', zIndex: 8, fill: 'rgb(95, 103, 156)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-450, 15) scale(1.45, 1.45) skewX(7.5)"
                    style={{ position: 'relative', zIndex: 9, fill: 'rgb(80, 86, 144)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-300, 10) scale(1.3, 1.3) skewX(5)"
                    style={{ position: 'relative', zIndex: 10, fill: 'rgb(65, 69, 132)' }}
                />
                <path
                    d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
                    fill="#174eff"
                    fillRule="nonzero"
                    transform="translate(-150, 5) scale(1.15, 1.15) skewX(2.5)"
                    style={{ position: 'relative', zIndex: 11, fill: 'rgb(50, 51, 119)' }}
                />
            </svg>
            <div className="flex-auto flex lg:pl-12 xl:pl-48 justify-center">
                <div className="md:max-w-[700px]  lg:max-w-[988px] md:px-4 px-4 text-md leading-6 pt-12">
                    <h2 className="font-thin text-6xl font-sans mb-4 z-10 relative">About Me</h2>
                    <div className="flex flex-col gap-4 text-lg md:text-xl relative">
                        <p>Hey there! I'm Orlando Umanzor, a self-taught MERN Stack Developer based in San Pedro Sula, Honduras. I have a strong passion for web development and have gained expertise in HTML, CSS, TypeScript, React, Node.js, and MongoDB through a combination of online courses and personal projects.</p>
                        <p className="flex flex-col items-center">My journey into the world of programming started with CS50, an Introduction to Computer Science course. It laid a solid foundation and sparked my interest in problem-solving and critical thinking. From there, I continued to expand my knowledge by completing various courses and programs, including The Odin Project's Full Stack Development course.
                            <Fade left distance="80px">
                                <img src={cs50} alt="CS50" className="shadow-[-5px_-5px_0_0_rgba(118,151,255,1),0_0_10px_rgba(0,0,0,1)]  w-3/4 my-12" />
                            </Fade>
                        </p>
                        <p>I'm a quick learner with a knack for solving complex problems. I love diving into new technologies and embracing challenges head-on. Git version control is my go-to for keeping projects organized and collaborating effectively with teammates.</p>
                        <p>One of my standout projects is a Facebook replica built using the MERN stack. It features user authentication, real-time data storage, post creation and browsing, commenting and liking functionality, search capabilities, and a clean and responsive user interface. I'm currently working on enhancing and adding more exciting features to it.</p>
                        <p>Another project I'm proud of is a Twitter replica that I built from the ground up using React, React Router, and Firebase. It includes features like user authentication, real-time data storage and retrieval, tweet posting and browsing, search functionality, and a sleek and responsive user interface.</p>
                        <p>In addition, I've developed a responsive shopping cart application using React Router and Context API. It offers seamless search, sorting, and filtering functionality, and manages real-time updates to the shopping cart for a smooth shopping experience across devices.</p>
                        <p>When I'm not coding, you can find me pursuing personal growth and self-improvement, hitting the weights at the gym, or exploring the latest web development trends and technologies. I'm always eager to learn and experiment with new tools and techniques to further enhance my skills.</p>
                        <p>If you're looking for a passionate and dedicated developer to join your team, I'd love to connect and discuss how I can contribute to your success.</p>
                        <p>Thanks for taking the time to visit my portfolio. I'm excited about the opportunity to work with like-minded professionals and make a positive impact in the world of web development. Let's create something awesome together!</p>
                    </div>
                </div>
            </div>
            <div className="m-auto flex gap-16 md:gap-12 items-start flex-wrap sm:justify-center h-fit w-fit md:mx-auto px-8 my-24 lg:mt-[600px]">
                <TechList header="Front-End Development">
                    <Fade cascade up duration={1000}>
                        <i className="devicon-html5-plain colored duration-100" ></i>
                        <i className="devicon-css3-plain colored duration-100" ></i>
                        <i className="devicon-javascript-plain colored duration-100" ></i>
                        <i className="devicon-react-original colored duration-100" ></i>
                        <i className="devicon-typescript-plain colored duration-100"></i>
                        <i className="devicon-tailwindcss-original-wordmark colored duration-100"></i>
                    </Fade>
                </TechList>
                <TechList header="Back-End Development">
                    <Fade cascade up duration={1000}>
                        <i className="devicon-nodejs-plain-wordmark colored duration-100"></i>
                        <i className="devicon-express-original colored duration-100" ></i>
                        <i className="devicon-mongodb-plain-wordmark colored duration-100" ></i >
                    </Fade>
                </TechList>
                <TechList header="Development Tools">
                    <Fade cascade up duration={1000}>
                        <i className="devicon-webpack-plain colored duration-100"></i>
                        <i className="devicon-firebase-plain colored duration-100" ></i>
                        <i className="devicon-jest-plain colored duration-100"  ></i>
                        <i className="devicon-npm-original-wordmark colored duration-100"></i>
                        <i className="devicon-git-plain colored duration-100"  ></i>
                    </Fade>
                </TechList>
            </div>
        </section>

    )
}

export default About