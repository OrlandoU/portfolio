import React, { useEffect, useState, useCallback, useRef } from "react"
import { ReactElement } from "react"
import logo from '../assets/logo.png'
import NavLink from "./NavLink"

function Header(props: any): ReactElement {
    const scrollRef = useRef<number>(0)
    const [top, setTop] = useState<boolean>(true)
    const [visible, setVisible] = useState<boolean>(true)

    const handleScroll = useCallback((e: Event) => {
        let scrollTop = document.documentElement.scrollTop
        if (scrollTop < 100) {
            setVisible(true)
            setTop(true)
        } else {
            setTop(false)
            if (scrollRef.current > scrollTop) {
                setVisible(true)
            } else {
                setVisible(false)
            }


        }
        scrollRef.current = scrollTop
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <nav className={"fixed top-0 left-0 transition-all w-full z-20 px-4 " + (!top ? 'bg-white text-black shadow ' : 'bg-transparent text-white ') + (!visible ? "-translate-y-full" : '')}>
            <div className="p-4 py-3 flex justify-between items-center font-semibold flex-col md:flex-row gap-2 md:gap-0 ">
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="Portfolio" className="h-8" />
                    <div>OrlandoU</div>
                </div>
                <div>
                    <ul className="flex gap-1 items-center">
                        <NavLink href="#about" top={top}>
                            About
                        </NavLink>
                        <NavLink href="#repositories" top={top}>
                            Repositories
                        </NavLink>
                        <NavLink href="#contact" top={top}>
                            Contact
                        </NavLink>
                        <NavLink href="#about" top={top}>
                            <i className="devicon-github-original"></i>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header