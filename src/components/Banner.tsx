import React, { useEffect, useRef, useState } from "react"
import { Fade } from "react-reveal"
import TOPOLOGY from "vanta/dist/vanta.topology.min"

function Banner(): JSX.Element {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const myRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TOPOLOGY({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 750.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x174eff,
                backgroundColor: 0x111414,
                showDots: false,
            }))
        } else {
            vantaEffect.destroy()
            setVantaEffect(TOPOLOGY({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 750.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x174eff,
                backgroundColor: 0x111414,
                showDots: false,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="h-[85vh] p-4 py-12 bg-[#111414] text-white font-sans flex flex-col items-start justify-center" ref={myRef}>
            <div className="md:pl-36">
                <div className="text-2xl md:text-4xl lg:text-5xl relative font-[inherit] drop-shadow font-semibold">
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Orlando </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Umanzor </span></Fade>
                </div>
                <div className="pl-1 pb-4">
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Full </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Stack </span></Fade>
                    <Fade cascade delay={1000} duration={2000}><span className="whitespace-nowrap">Developer</span></Fade>
                </div>
                <Fade delay={1000} duration={2000}>
                    <p className="text-gray-300 max-w-[450px] text-sm sm:text-base">Enthusiastically immersed in the world of coding,
                        <br /> I am a web development aficionado.
                        With knowledge in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
                        Let's team up to create extraordinary digital experiences.</p>
                </Fade>
            </div>
        </section>
    )
}

export default Banner