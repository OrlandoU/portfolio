import Project from "./Project"
import twitterImg from '../assets/twitter.png'
import ResumeImg from '../assets/Resume.png'
import todoImg from '../assets/TO-DO.png'

function Projects() {

    const projects = [
        {
            title: "Twitter Replica",
            description: (
                <>
                    <p>In this project, I created a Twitter replica using React Routing and Firebase. React Routing was used for client-side routing, allowing for dynamic page rendering based on user actions. Firebase was used for secure data storage, including user profiles, tweets, and followers. Firebase Authentication was also implemented for secure user login functionality. By combining these technologies, I was able to create a seamless user experience while ensuring data security and reliability.</p>
                    <p>Overall, this project highlights my proficiency in React Routing and Firebase, as well as my ability to integrate different technologies to build a functional application. The final result is a fully functional Twitter replica that provides a reliable and secure platform for users to interact and share content. </p>
                </>
            ),
            image: twitterImg,
            technologies: ["React", 'Css', 'Firebase', 'Git', 'Npm'],
            liveDemo: "https://orlandou.github.io/twitter-replication-project/",
            sourceCode: "https://github.com/OrlandoU/twitter-replication-project",
        },
        {
            title: "Resume Builder",
            description: (
                <>
                    <p>This project showcases my expertise in React by creating a resume builder web application. The application allows users to easily create and customize their own professional resumes by filling out a simple form. The application features a clean and modern design and is fully responsive, making it accessible and easy to use on a variety of devices such as desktops, laptops, tablets, and mobile devices.</p>
                    <p>With this project, users can create a polished and professional resume with just a few clicks. The application's intuitive interface guides users through the process of filling out the necessary fields to generate a customized resume. Overall, this project demonstrates my skills in React and my ability to create practical applications that can improve the productivity of users.</p>
                </>
            ),
            image: ResumeImg,
            technologies: ["React", 'Css', 'Npm', 'Git'],
            liveDemo: "https://orlandou.github.io/cv-project/",
            sourceCode: "https://github.com/OrlandoU/cv-project",
        },
        {
            title: "To-Do List",
            description: (
                <>
                    <p>This project showcases my proficiency in JavaScript modules and Firebase by creating a simple but powerful todo list application. The application enables users to create and manage tasks with ease by using a user-friendly interface.</p>
                    <p>The todo list application uses JavaScript modules to keep the code organized and maintainable, allowing for easy updates and modifications. Firebase is used to store all the tasks securely, ensuring that users can access their tasks from anywhere and on any device.</p>
                </>
            ),
            image: todoImg,
            technologies: ['Js', "HTML", "Css", 'Firebase', 'Npm', "Git"],
            liveDemo: "https://orlandou.github.io/todo-list-project/",
            sourceCode: "https://github.com/OrlandoU/todo-list-project",
        },
        // add more projects here
    ]

    return (
        <section className="projects" id="projects">
            <h2 className="title">Projects</h2>
            <div className="projects-wrapper">
                <ul className="projects-list">
                    {projects.map((project, index) => (
                        <Project key={index} {...project} side={index % 2 === 0} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects