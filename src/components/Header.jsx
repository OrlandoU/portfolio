import { useEffect, useState } from "react"

function Header() {
    const [scrolled, setScrolled] = useState(window.pageYOffset)
    const [scrollY, setScrollY] = useState(0)



    useEffect(() => {
        const setState = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos === 0) {
                setScrolled(false)
            } else {
                setScrolled(scrollY > currentScrollPos || currentScrollPos < 10);
            }
            setScrollY(currentScrollPos);
        }
        document.addEventListener('scroll', setState)
        return () => document.removeEventListener('scroll', setState)
    }, [scrollY])



    return (
        <nav className={scrolled ? "nav-bar scrolled" : 'nav-bar'}>
            <div className="app-name">OU</div>
            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#projects">Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/OrlandoU">
                            <i class="devicon-github-original"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header