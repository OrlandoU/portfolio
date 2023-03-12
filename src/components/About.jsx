import { useEffect, useState } from "react"
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
            <div className="about-wrapper">
                <h1 className="title">
                    <span>
                        About Me
                    </span>
                </h1>
                <div className="left-about">
                    <p>Welcome to my portfolio! My name is <strong>Orlando Jose Umanzor Zelaya</strong> and I am a web developer who has been working on various projects through The Odin Project for the past year.</p>
                    <p>During this time, I have gained hands-on experience using a variety of technologies including <strong>React</strong>, <strong>JavaScript</strong>, <strong>CSS</strong>, and <strong>HTML</strong>. I am passionate about creating responsive and engaging web applications that solve real-world problems.</p>
                    <p>My journey as a web developer began when I discovered The Odin Project, which provided me with a structured and comprehensive curriculum to learn web development. Since then, I have been building projects and honing my skills through practice and experimentation.</p>
                    <p>Aside from web development, I enjoy spending my free time exploring new technologies, learning new programming languages, and contributing to open-source projects.</p>
                    <p>Feel free to take a look at my portfolio to see some of the projects I have worked on. If you have any questions or would like to collaborate, please don't hesitate to get in touch!</p>
                </div>
                <div className={!viewed ? "right-about" : 'right-about appear'}>
                    <i className="devicon-javascript-plain colored" style={{ transitionDelay: `0s` }}></i>
                    <i class="devicon-css3-plain colored" style={{ transitionDelay: `.3s` }}></i>
                    <i class="devicon-html5-plain colored" style={{ transitionDelay: `.6s` }}></i>
                    <i class="devicon-react-original colored" style={{ transitionDelay: `.9s` }}></i>
                    <i class="devicon-firebase-plain colored" style={{ transitionDelay: `1.2s` }}></i>
                    <i class="devicon-jest-plain colored" style={{ transitionDelay: `1.5s` }}></i>
                    <i class="devicon-npm-original-wordmark colored" style={{ transitionDelay: `1.8s` }}></i>
                    <i class="devicon-git-plain colored" style={{ transitionDelay: `2.1s` }}></i>
                </div>
            </div>
        </section>

    )
}

export default About