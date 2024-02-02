import React from 'react';

//components
import Main from './Components/Main/Main';
import Nav from './Components/Navigation/Nav';
import Mode from './Components/Mode/Mode';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import './index.css';

function App() {
  return (
    <>
      <Nav />
      <Mode />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
