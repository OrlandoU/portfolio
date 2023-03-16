import React, { useEffect, useState } from "react"
import { Fade } from "react-reveal"

const Banner = React.forwardRef((props, ref) => {

    return (
        <section className="banner" ref={ref}>
            <div className="name">
                <Fade cascade right><span>Orlando</span></Fade> <Fade cascade right><span>Jose</span></Fade> <Fade cascade right><span>Umanzor</span></Fade> <Fade cascade right><span>Zelaya</span></Fade>
            </div>
            <div className="position">Full Stack Developer</div>
            <a href="#about" className="banner-svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="banner-svg"><title>Scroll to About Section</title><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>
            </a>
        </section>
    )
})

export default Banner