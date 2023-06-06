import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import '../styles/App.css';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import React from 'react';

function App(): JSX.Element {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const [theme, setTheme] = useState<boolean>(false)
  const myRef = useRef<HTMLElement>(null)

  const toggleTheme = () =>{
    setTheme(prev=>!prev)
  }

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: theme ? 0x4B709F : 0xC8B6A6,
        backgroundColor: theme ? 0x1a2e44 : 0xF1DEC9,
        showDots: false
      }))
    } else {
      vantaEffect.destroy()
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: theme ? 0x4B709F : 0xC8B6A6,
        backgroundColor: theme ? 0x1a2e44 : 0xF1DEC9,
        showDots: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <div className={!theme? "App": "App Dark"}>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Banner ref={myRef}/>
      <About />
      <Projects theme={theme}/>
      <Contact />
    </div>
  );
}

export default App;
