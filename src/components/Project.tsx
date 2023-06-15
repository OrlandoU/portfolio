import { ReactElement } from "react"
import React from "react";
import { ProjectI } from "./Projects";
import { Fade } from 'react-reveal'

interface ProjectProps extends ProjectI {
    side: boolean,
    index: number
}

interface TechIcon {
    [key: string]: JSX.Element;
}

function Project(props: ProjectProps): ReactElement {

    const { title, description, image, technologies, liveDemo, sourceCode }: ProjectI = props
    const equivalents: TechIcon = {
        React: < i className="devicon-react-original colored" ></i>,
        Css: <i className="devicon-css3-plain colored"></i>,
        Js: <i className="devicon-javascript-plain colored"></i>,
        HTML: <i className="devicon-html5-plain colored"></i>,
        Webpack: <i className="devicon-webpack-plain colored"></i>,
        Git: <i className="devicon-git-plain colored"></i>,
        Npm: <i className="devicon-npm-original-wordmark colored"></i>,
        Firebase: <i className="devicon-firebase-plain colored"></i>,
        Typescript: <i className="devicon-typescript-plain colored"></i>,
        Node: <i className="devicon-nodejs-plain-wordmark colored"></i>,
        Express: <i className="devicon-express-original"></i>,
        Mongo: < i className="devicon-mongodb-plain-wordmark colored" ></i >,
    }
        return (
            <li className={props.side ? "project" : 'project reversed' }>
                <Fade cascade fraction={.2} right={props.side} left={!props.side}>
                    <div className={props.side ? "project-img length" + image.length : 'project-img left length' + image.length}>
                        {image.map(img =>
                            <img src={img} alt="" />
                        )}
                    </div>
                </Fade>
                <Fade fraction={.5} cascade up>
                    <div className="project-details">
                        <h2>{title}</h2>
                        <div className="project-techs">
                            {technologies.map(tech => (
                                equivalents[tech]
                            ))}
                        </div>
                        <div className="project-description">{description}</div>
                        <div className="project-links">
                            <a href={liveDemo} rel='noreferrer' target="_blank"> <span>Live Demo</span></a>
                            <a href={sourceCode} rel='noreferrer' target="_blank"><i className="devicon-github-original"></i><span>Source Code</span></a>
                        </div>
                    </div>
                </Fade>
            </li>
        )
    
}

export default Project