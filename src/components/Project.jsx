import { useEffect, useLayoutEffect, useRef, useState } from "react"
import FOG from 'vanta/dist/vanta.dots.min';
import { Fade } from "react-reveal"

function Project(props) {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                color: props.theme ? 0x4B709F : 0xC8B6A6,
                scale: 1.00,
                maxHeight: 380,
                spacing: 17.00,
                backgroundColor: props.theme ? 0x1a2e44 : 0xF1DEC9,
                scaleMobile: 1.00,
                showLines: false
            }))
        } else {
            vantaEffect.destroy()
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                color: props.theme ? 0x4B709F : 0xC8B6A6,
                scale: 1.00,
                maxHeight: 380,
                spacing: 17.00,
                backgroundColor: props.theme ? 0x1a2e44 : 0xF1DEC9,
                scaleMobile: 1.00,
                showLines: false
            }))
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [props.theme])



    const { title, description, image, technologies, liveDemo, sourceCode } = props
    const equivalents = {
        React: < i class="devicon-react-original colored" ></i>,
        Css: <i class="devicon-css3-plain colored"></i>,
        Js: <i class="devicon-javascript-plain colored"></i>,
        HTML: <i class="devicon-html5-plain colored"></i>,
        Webpack: <i class="devicon-webpack-plain colored"></i>,
        Git: <i class="devicon-git-plain colored"></i>,
        Npm: <i class="devicon-npm-original-wordmark colored"></i>,
        Firebase: <i class="devicon-firebase-plain colored"></i>,
        Typescript: <i class="devicon-typescript-plain colored"></i>,
        Node: <i class="devicon-nodejs-plain-wordmark colored"></i>,
        Express: < i class="devicon-express-original-wordmark colored" ></i >,
        Mongo:< i class="devicon-mongodb-plain-wordmark colored" ></i >,
    }

    if (props.side) {
        return (
            <li className="project" ref={myRef}>
                <Fade fraction={.5} cascade up>
                    <div className="project-details">
                        <h2>{title}</h2>
                        <div className="project-techs">
                            {technologies.map(tech => (
                                equivalents[tech]
                            ))}
                        </div>
                        <div className="project-img mini">
                            <img src={image} alt="Project" />
                        </div>
                        <div className="project-description">{description}</div>
                        <div className="project-links">
                            <a href={liveDemo} rel='noreferrer' target="_blank"><span>Live Demo</span></a>
                            <a href={sourceCode} rel='noreferrer' target="_blank"><span>Source Code</span></a>
                        </div>
                    </div>
                </Fade>
                <Fade fraction={.5} right>
                    <div className="project-img">
                        <img src={image} alt="Project" />
                    </div>
                </Fade>
            </li>
        )
    }

    return (
        <li className="project" ref={myRef}>
            <Fade fraction={.5} left>
                <div className="project-img">
                    <img src={image} alt="Project" />
                </div>
            </Fade>
            <Fade fraction={.5} cascade up>
                <div className="project-details right">
                    <h2>{title}</h2>
                    <div className="project-techs">
                        {technologies.map(tech => (
                            equivalents[tech]
                        ))}
                    </div>
                    <div className="project-img mini">
                        <img src={image} alt="Project" />
                    </div>
                    <div className="project-description">{description}</div>
                    <div className="project-links">
                        <a href={liveDemo} rel='noreferrer' target="_blank"><span>Live Demo</span></a>
                        <a href={sourceCode} rel='noreferrer' target="_blank"><span>Source Code</span></a>
                    </div>
                </div>
            </Fade>
        </li>
    )
}

export default Project