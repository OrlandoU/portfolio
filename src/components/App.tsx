import { useEffect, useRef, useState } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import '../styles/output.css';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import React from 'react';

function App(): JSX.Element {
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
        color: 0x6a3bd4,
        backgroundColor: 0xe6ffff,
        showDots: false
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
        color: 0x6a3bd4,
        backgroundColor: 0xe6ffff,
        showDots: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='font-["Source_Sans_Pro"] bg-[#E6FFFF]'>
      <div ref={myRef} className='fixed top-0 left-0 w-screen h-screen -z-1'></div>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
