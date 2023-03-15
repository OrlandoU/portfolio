import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import '../styles/App.css';
import About from './About';
import Banner from './Banner';
import Header from './Header';
import Projects from './Projects';

function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useLayoutEffect(() => {
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
        color: 0x4B709F,
        backgroundColor: 0x1a2e44,
        showDots: false
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="App">
      <Header />
      <Banner ref={myRef}/>
      <About />
      <Projects />
    </div>
  );
}

export default App;
