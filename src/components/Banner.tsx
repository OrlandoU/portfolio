import React from "react"
import { Fade } from "react-reveal"



function Banner(): JSX.Element {
    return (
        <section className="banner">
            <div className="banner-header">

                <div className="name">
                    <Fade cascade delay={1000} duration={2000}><span>Orlando </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span>Jose </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span>Umanzor </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span>Zelaya </span></Fade>
                </div>
                <div className="position">
                    <Fade cascade delay={1000} duration={2000}><span>Full </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span>Stack </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span>Developer</span></Fade>
                </div>

            </div>
        </section>
    )
}

export default Banner