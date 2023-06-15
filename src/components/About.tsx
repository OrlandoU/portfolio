import React from "react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Fade } from "react-reveal"

function About(): JSX.Element {
    const [, setViewed] = useState<boolean>()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

    const handleColored: React.MouseEventHandler = (e: React.MouseEvent) => {
        let element: HTMLElement = e.target as HTMLElement
        element.classList.add('colored')
    }

    const handleUnColored: React.MouseEventHandler = (e: React.MouseEvent) => {
        let element: HTMLElement = e.target as HTMLElement
        element.classList.remove('colored')
    }

    useEffect(() => {
        if (inView) {
            setViewed(true)
        }
    }, [inView])

    return (
        <section id="about" className="about" ref={ref}>
            <div className="about-wrapper">
                <Fade cascade left delay={400}>
                    <div className="my-thecs">
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-javascript-plain" ></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-css3-plain " ></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-html5-plain " ></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-react-original " ></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-webpack-plain "></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-firebase-plain " ></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-jest-plain "  ></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-npm-original-wordmark "></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-git-plain "  ></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-typescript-plain "></i>
                        <i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-nodejs-plain-wordmark "></i>
                        < i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-express-original" ></i>
                        < i onMouseOver={handleColored} onMouseLeave={handleUnColored} className="devicon-mongodb-plain-wordmark " ></i >
                    </div>
                </Fade>
                <div className="left-about">
                    <p>I am Orlando Umanzor, a self-taught Front-End Developer specializing in HTML, CSS, JavaScript, React, Node.js, and MongoDB. With a strong passion for web development and continuous learning, I am dedicated to creating engaging and user-friendly web applications.</p>
                    <br />
                    <p>Through self-study and personal projects, I have honed my skills in building responsive and dynamic web experiences. I thrive on challenges and embrace innovative solutions with a problem-solving mindset. Adapting to new technologies is second nature to me, and I thrive in fast-paced and collaborative environments.</p>
                    <br />
                    <p>As a motivated and enthusiastic developer, I prioritize staying up-to-date with industry trends and best practices. I am committed to continuous growth and actively seek opportunities to expand my knowledge and enhance my skills.</p>
                    <br />
                    <p>I am excited about the opportunity to contribute my expertise to a dynamic team and make a meaningful impact. With my dedication, adaptability, and passion for web development, I am confident in my ability to deliver high-quality solutions and contribute to the success of any organization.</p>
                    <br />
                    <p>Thank you for visiting my portfolio. I would love to discuss how my skills and experiences align with your project or organization. Feel free to reach out to me to start a conversation.</p>
                </div>
            </div>
        </section>

    )
}

export default About