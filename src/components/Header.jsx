import { useEffect, useRef, useState } from "react"

function Header(props) {
    const [scrolled, setScrolled] = useState(window.pageYOffset)
    const [scrollY, setScrollY] = useState(0)
    const myRef = useRef()

    useEffect(() => {
        const setState = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos === 0) {
                myRef.current.classList.add('top')
                setScrolled(true)
            } else {
                myRef.current.classList.remove('top')
                setScrolled(scrollY > currentScrollPos);
            }
            setScrollY(currentScrollPos);
        }
        document.addEventListener('scroll', setState)
        return () => document.removeEventListener('scroll', setState)
    }, [scrollY])

    useEffect(()=>{
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos === 0) {
            myRef.current.classList.add('top')
            setScrolled(true)
        } else {
            myRef.current.classList.remove('top')
            setScrolled(scrollY > currentScrollPos);
        }
        setScrollY(currentScrollPos);
    },[])

    return (
        <nav className={scrolled ? "nav-bar scrolled" : 'nav-bar'} ref={myRef}>
            <div className="app-name">OU</div>
            <div className="nav-links">
                <ul>
                    
                    <li>
                        <a href="#about" aria-label="Scroll to About section">About</a>
                    </li>
                    <li>
                        <a href="#projects" aria-label="Scroll to Projects section">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" aria-label="Scroll to Contact section">Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/OrlandoU" aria-label="View Github Profile">
                            <i class="devicon-github-original"></i>
                        </a>
                    </li>
                    <li onClick={props.toggleTheme} className='theme' aria-label="Toggle Theme" tabIndex={0}>
                        {props.theme ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waxing-crescent</title><path d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" /></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>white-balance-sunny</title><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header