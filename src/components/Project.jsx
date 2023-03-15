import { useLayoutEffect, useRef, useState } from "react"
import { Fade } from "react-awesome-reveal"
import FOG from 'vanta/dist/vanta.dots.min';


function Project(props) {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useLayoutEffect(() => {
        if (!vantaEffect) {
            console.log(FOG)
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                color: 0x4B709F,
                scale: 1.00,
                maxHeight: 380,
                spacing: 17.00,
                backgroundColor: 0x1a2e44,
                scaleMobile: 1.00,
                showLines: false
            }))
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    const { title, description, image, technologies, liveDemo, sourceCode } = props
    const equivalents = {
        React: < i class="devicon-react-original colored" ></i>,
        Css: <i class="devicon-css3-plain colored"></i>,
        Js: <i class="devicon-javascript-plain colored"></i>,
        HTML: <i class="devicon-html5-plain colored"></i>,
        Webpack: <i class="devicon-webpack-plain colored"></i>,
        Git: <i class="devicon-git-plain colored"></i>,
        Npm: <i class="devicon-npm-original-wordmark colored"></i>,
        Firebase: <i class="devicon-firebase-plain colored"></i>

    }

    if (props.side) {
        return (
            <li className="project" ref={myRef}>
                <div className="project-details">
                    <Fade cascade damping={0.3} direction='up' triggerOnce>
                        <h2>{title}</h2>
                        <div className="project-techs">
                            {technologies.map(tech => (
                                equivalents[tech]
                            ))}
                        </div>
                        <div className="project-description">{description}</div>
                        <div className="project-links">
                            <a href={liveDemo} rel='noreferrer' target="_blank">Live Demo</a>
                            <a href={sourceCode} rel='noreferrer' target="_blank">Source Code</a>
                        </div>
                    </Fade>
                </div>
                <div className="project-img">
                    <Fade direction="left" triggerOnce>
                        <img src={image} alt="Project" />
                    </Fade>
                </div>
            </li>
        )
    }

    return (
        <li className="project" ref={myRef}>
            <div className="project-img">
                <Fade direction="left" triggerOnce>
                    <img src={image} alt="Project" />
                </Fade>
            </div>
            <div className="project-details right">
                <Fade cascade damping={0.3} direction='up' triggerOnce>
                    <h2>{title}</h2>
                    <div className="project-techs">
                            {technologies.map(tech => (
                                equivalents[tech]
                            ))}
                    </div>
                    <div className="project-description">{description}</div>
                    <div className="project-links">
                        <a href={liveDemo} rel='noreferrer' target="_blank">Live Demo</a>
                        <a href={sourceCode} rel='noreferrer' target="_blank">Source Code</a>
                    </div>
                </Fade>
            </div>
        </li>
    )
}

export default Project