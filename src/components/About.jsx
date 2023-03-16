import { useEffect, useState } from "react"
import { Fade } from "react-reveal"
import { useInView } from "react-intersection-observer"

function About() {
    const [viewed, setViewed] = useState()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

    useEffect(() => {
        if (inView) {
            setViewed(true)
        }
    }, [inView])

    return (
        <section id="about" className="about" ref={ref}>
            <h1 className="title">
                <span>
                    About Me
                </span>
            </h1>
            <div className="about-wrapper">
                <Fade triggerOnce up>
                    <div className="left-about">
                        <p>Welcome to my portfolio! My name is <strong>Orlando Jose Umanzor Zelaya</strong> and I am a web developer who has been working on various projects through The Odin Project for the past year.</p>
                        <p>During this time, I have gained hands-on experience using a variety of technologies including <strong>React</strong>, <strong>JavaScript</strong>, <strong>CSS</strong>, and <strong>HTML</strong>. I am passionate about creating responsive and engaging web applications that solve real-world problems.</p>
                        <p>My journey as a web developer began when I discovered The Odin Project, which provided me with a structured and comprehensive curriculum to learn web development. Since then, I have been building projects and honing my skills through practice and experimentation.</p>
                        <p>Aside from web development, I enjoy spending my free time exploring new technologies, learning new programming languages, and contributing to open-source projects.</p>
                        <p>Feel free to take a look at my portfolio to see some of the projects I have worked on. If you have any questions or would like to collaborate, please don't hesitate to get in touch!</p>
                    </div>
                </Fade>
                <Fade cascade up delay={200}>
                    <div className="right-about">
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-css3-plain colored" ></i>
                        <i className="devicon-html5-plain colored" ></i>
                        <i className="devicon-react-original colored" ></i>
                        <i className="devicon-webpack-plain colored"></i>
                        <i className="devicon-firebase-plain colored" ></i>
                        <i className="devicon-jest-plain colored"  ></i>
                        <i className="devicon-npm-original-wordmark colored"  ></i>
                        <i className="devicon-git-plain colored"  ></i>
                    </div>
                </Fade>
            </div>
        </section>

    )
}

export default About