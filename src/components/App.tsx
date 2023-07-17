import { ReactElement } from 'react';
import '../styles/output.css';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import React from 'react';
import GithubRepos from './GithubRepos';

function App(): ReactElement {

  return (
    <div className='font-sans bg-slate-900 '>
      <Header />
      <Banner />
      <About />
      <Projects />
      <GithubRepos />
      <Contact />
    </div>
  );
}

export default App;
