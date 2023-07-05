import Project from "./Project"
import twitterImg from '../assets/twitter.png'
import twitter2Img from '../assets/twitter2.png'
import twitter3Img from '../assets/twitter3.png'
import ResumeImg from '../assets/Resume.png'
import todoImg from '../assets/todo.png'
import todo2Img from '../assets/todo2.png'
import todo3Img from '../assets/todo3.png'
import shopImg from '../assets/Shop.png'
import weatherImg from '../assets/Weather.png'
import odinbookImg from '../assets/odinbook.png'
import odinbook2Img from '../assets/odinbook2.png'
import odinbook3Img from '../assets/odinbook3.png'
import { ReactElement, useEffect } from "react"
import React from "react"
import { useInView } from "react-intersection-observer"

export interface ProjectI {
    title: string;
    description: JSX.Element;
    image: string[];
    technologies: string[];
    liveDemo: string;
    sourceCode: string;
}

function Projects(): ReactElement {
    const [ref, inView] = useInView({ threshold: 0.2 })

    const projects: ProjectI[] = [
        {
            title: "OdinBook",
            description: (
                <>
                    <p>In the "Odin Book" project, a replica of Facebook, the technologies used include the <strong>MERN stack</strong> (MongoDB, Express.js, React, and Node.js) with <strong>Mongoose</strong> for data modeling, <strong>Passport</strong> for authentication, and <strong>TypeScript</strong> on the backend.</p>
                    <p>React Routing was employed for client-side routing, enabling dynamic page rendering based on user actions.</p>
                    <p>For the backend, <strong>Express.js</strong> with <strong>Node.js</strong> and <strong>TypeScript</strong> were used to handle server-side operations, data management, and API endpoints.</p>
                    <p>Image storage was handled using <strong>Firebase</strong>, providing a secure solution for storing user profile pictures, posts, and other images in the application.</p>
                    <p>By integrating these technologies, the "Odin Book" project successfully created a feature-rich social media platform. It demonstrates proficiency in the MERN stack and showcases the ability to leverage additional technologies for specific functionalities. The result is a reliable and secure platform that replicates the core features of Facebook.</p>

                </>
            ),
            image: [odinbookImg, odinbook2Img, odinbook3Img],
            technologies: ["React", "Node", 'Mongo', "Typescript", 'Css', 'Firebase', 'Git', 'Npm', 'Express'],
            liveDemo: "https://orlandou.github.io/odin-book/",
            sourceCode: "https://github.com/OrlandoU/odin-book",
        },
        {
            title: 'Twitter Replica',
            description: (
                <>
                    <p>In this project, I created a Twitter replica using <strong>React Routing</strong> and <strong>Firebase</strong>. <strong>React Routing</strong> was used for client-side routing, allowing for dynamic page rendering based on user actions. <strong>Firebase</strong> was used for secure data storage, including user profiles, tweets, and followers. <strong>Firebase Authentication</strong> was also implemented for secure user login functionality. By combining these technologies, I was able to create a seamless user experience while ensuring data security and reliability.</p>
                    <p>Overall, this project highlights my proficiency in <strong>React Routing</strong> and <strong>Firebase</strong>, as well as my ability to integrate different technologies to build a functional application. The final result is a fully functional Twitter replica that provides a reliable and secure platform for users to interact and share content.</p>
                </>
            ),
            image: [twitterImg, twitter2Img, twitter3Img],
            technologies: ["React", 'Css', 'Firebase', 'Git', 'Npm'],
            liveDemo: "https://orlandou.github.io/twitter-replication-project/",
            sourceCode: "https://github.com/OrlandoU/twitter-replication-project",
        },
        {
            title: "Resume Builder",
            description: (
                <>
                    <p>This project showcases my expertise in <strong>React</strong> by creating a resume builder web application. The application allows users to easily create and customize their own professional resumes by filling out a simple form. The application features a clean and modern design and is fully responsive, making it accessible and easy to use on a variety of devices such as desktops, laptops, tablets, and mobile devices.</p>
                    <p>With this project, users can create a polished and professional resume with just a few clicks. The application's intuitive interface guides users through the process of filling out the necessary fields to generate a customized resume. Overall, this project demonstrates my skills in <strong>React</strong> and my ability to create practical applications that can improve the productivity of users.</p>
                </>
            ),
            image: [ResumeImg],
            technologies: ["React", 'Css', 'Npm', 'Git'],
            liveDemo: "https://orlandou.github.io/cv-project/",
            sourceCode: "https://github.com/OrlandoU/cv-project",
        },
        {
            title: "To-Do List",
            description: (
                <>
                    <p>This project showcases my proficiency in <strong>JavaScript modules</strong> and <strong>Firebase</strong> by creating a simple but powerful todo list application. The application enables users to create and manage tasks with ease by using a user-friendly interface.</p>
                    <p>The todo list application uses <strong>JavaScript modules</strong> to keep the code organized and maintainable, allowing for easy updates and modifications. <strong>Firebase</strong> is used to store all the tasks securely, ensuring that users can access their tasks from anywhere and on any device.</p>
                </>
            ),
            image: [todoImg, todo2Img],
            technologies: ['Js', "HTML", "Css", 'Firebase', 'Npm', "Git"],
            liveDemo: "https://orlandou.github.io/todo-list-project/",
            sourceCode: "https://github.com/OrlandoU/todo-list-project",
            
        },
        {
            title: "Shopping Cart",
            description: (
                <>
                    <p>This shopping cart web application is built with <strong>React</strong> and <strong>React Routing</strong>, allowing for dynamic rendering of components based on user actions. Users can easily browse and purchase products from a catalog of items, adding items to their cart and viewing a summary before proceeding to checkout.</p>
                    <p>The application provides a user-friendly interface, making it convenient for users to shop online and complete their transactions with ease.</p>
                </>
            ),
            image: [shopImg],
            technologies: ['React', "Css", 'Npm', "Git"],
            liveDemo: "https://orlandou.github.io/shopping-cart-project/",
            sourceCode: "https://github.com/OrlandoU/shopping-cart-project",
        },
        {
            title: "Weather App",
            description: (
                <>
                    <p>This weather app utilizes the <strong>OpenWeather API</strong> to provide real-time weather data for any location worldwide. Users can view current weather conditions, as well as hourly and daily forecasts to get an accurate view of the weather in their desired location.</p>
                    <p>The app is built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, with a modern and clean design that is user-friendly on both desktop and mobile devices.</p>
                    <p>Overall, this project demonstrates the use of APIs to create practical applications that provide useful information to users. This weather app offers a convenient way for users to stay informed about the weather in any location and plan their activities accordingly.</p>

                </>
            ),
            image: [weatherImg],
            technologies: ['Js', "HTML", "Css", 'Webpack', 'Npm', "Git"],
            liveDemo: "https://orlandou.github.io/weather-app/",
            sourceCode: "https://github.com/OrlandoU/weather-app",
        }
        // add more projects here
    ]

    return (
        <section id="projects" ref={ref}>
            <h2 className="flex z-10 bg-indigo-700 text-white p-2 gap-4 justify-center text-2xl md:text-4xl lg:text-3xl relative flex-wrap px-6 mb-[48px] shadow-[0_0_10px_4px_rgba(0,0,0,0.5)]">
                <span>Featured Projects</span>
                <span className="absolute inset-0 h-1 -top-1.5 z-10 bg-indigo-700"></span>
            </h2>
            <div>
                <ul className="flex flex-col gap-[126px] items-center">
                    {projects.map((project, index) => (
                        <Project key={index} {...project} side={index % 2 === 0} index={index} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects