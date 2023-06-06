import React from "react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
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
        <section id="about" className="about" ref={ref}>
            <h1 className="title">
                <span>
                    About Me
                </span>
            </h1>
            <div className="about-wrapper">
                <Fade triggerOnce up>
                    <div className="left-about">
                        <h2>Welcome to My Portfolio!</h2>
                        <p>
                            My name is Orlando Jose Umanzor Zelaya, and I am a web developer with experience working on various projects through The Odin Project. I specialize in creating responsive and engaging web applications using technologies such as React, JavaScript, CSS, and HTML. I have also gained hands-on experience with technologies like MongoDB, Node.js, and Express.js.
                        </p>
                        <p>
                            I am passionate about solving real-world problems through web development and have been refining my skills by building projects and exploring new technologies. Additionally, I enjoy staying up-to-date with industry trends and learning new programming languages to expand my skill set.
                        </p>
                        <p>
                            Please take a moment to explore my portfolio and see some of the projects I have worked on. If you have any questions or would like to collaborate, feel free to get in touch!
                        </p>
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
                        <i className="devicon-npm-original-wordmark colored"></i>
                        <i className="devicon-git-plain colored"  ></i>
                        <i className="devicon-typescript-plain colored"></i>
                        <i className="devicon-nodejs-plain-wordmark colored"></i>
                        < i className="devicon-express-original-wordmark colored" ></i >
                        < i className="devicon-mongodb-plain-wordmark colored" ></i >
                    </div>
                </Fade>
            </div>
        </section>

    )
}

export default About